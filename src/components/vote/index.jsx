import React, { useState, useEffect } from 'react';
import VoteHeader from './voteComponents/VoteHeader';
import CandidateCard from './voteComponents/CandidateCard';
import VoteButton from './voteComponents/VoteButton';
import CancelButton from './voteComponents/CancelButton';

import Disclaimer from './voteComponents/Disclaimer';
import useVote from './useVote';

import toast from 'react-hot-toast';
import RegionSelect from './voteComponents/RegionSelect';

import { sendVote, cancelVote } from '@/apis/voteApi';
import { candidates } from '@/utils/candidates';

const Vote = () => {
  const [selectedRegionId, setSelectedRegionId] = useState(null);
  const { selected, selectCandidate } = useVote();
  const [isVoted, setIsVoted] = useState(false);

  const handleRegionSelect = (regionId) => {
    setSelectedRegionId(regionId);
  };

  // 지역 먼저 선택하라는 토스트
  const handleVote = async () => {
    if (localStorage.getItem('voteInfo')) {
      toast.error('이미 투표를 완료하셨습니다.');
      return;
    }
    if (selectedRegionId === null) {
      toast.error('지역을 먼저 선택해주세요.');
      return;
    }
    const selectedCandidate = candidates.find((candidate) => candidate.id === selected);
    if (!selectedCandidate) {
      toast.error('후보를 선택해주세요.');
      return;
    }

    try {
      await sendVote({
        region: selectedRegionId,
        candidate: selectedCandidate.id,
      });

      localStorage.setItem(
        'voteInfo',
        JSON.stringify({ region: selectedRegionId, candidate: selectedCandidate.id })
      );
      setIsVoted(true);
      toast.success(`${selectedCandidate.name} 후보에게 투표 완료되었습니다.`);
    } catch (err) {
      toast.error('투표 전송 실패: 서버 문제 또는 네트워크 오류');
      console.error(err);
    }
  };

  const handleCancelVote = async () => {
    const selectedCandidate = candidates.find((candidate) => candidate.id === selected);
    try {
      await cancelVote({
        region: selectedRegionId,
        candidate: selectedCandidate.id,
      });

      localStorage.removeItem('voteInfo');
      setSelectedRegionId(null);
      selectCandidate(null);
      setIsVoted(false);
      toast.success('투표가 취소되었습니다.');
    } catch (err) {
      toast.error('투표 취소 실패: 서버 문제 또는 네트워크 오류');
      console.error(err);
    }
  };

  useEffect(() => {
    const stored = localStorage.getItem('voteInfo'); // 로컬에서 데이터 가져옴
    if (stored) {
      const { regionId, candidateId } = JSON.parse(stored);
      setSelectedRegionId(regionId);
      selectCandidate(candidateId);
      setIsVoted(true);
    }
  }, []);

  return (
    <div className="p-4 space-y-4 max-w-md mx-auto">
      <VoteHeader />
      {/* 지역선택 */}
      <RegionSelect selectedRegionId={selectedRegionId} onRegionSelect={handleRegionSelect} />

      {/* 후보자 카드 */}
      {candidates.map((candidate) => (
        <CandidateCard
          key={candidate.id}
          image={candidate.image}
          name={candidate.name}
          party={candidate.party}
          slogan={candidate.slogan}
          selected={selected === candidate.id}
          onClick={() => selectCandidate(candidate.id)}
        />
      ))}

      {/* 투표 */}
      {isVoted ? (
        <CancelButton onClick={handleCancelVote} />
      ) : (
        <VoteButton disabled={selected === null} onClick={handleVote} />
      )}

      <Disclaimer />
    </div>
  );
};

export default Vote;
