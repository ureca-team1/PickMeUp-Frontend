import { cancelVote, sendVote } from '@/apis/voteApi';
import Button from '@/components/common/Button';
import { candidates } from '@/utils/candidates';
import { getVotedCandidate, saveVotedCandidate } from '@/utils/localStorage';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { candidateImages } from './images/images';
import useVote from './useVote';
import CandidateCard from './voteComponents/CandidateCard';
import Disclaimer from './voteComponents/Disclaimer';
import RegionSelect from './voteComponents/RegionSelect';
import VoteHeader from './voteComponents/VoteHeader';

const Vote = () => {
  const [selectedRegionId, setSelectedRegionId] = useState(null);
  const { selected, selectCandidate } = useVote();
  const [isVoted, setIsVoted] = useState(false);

  const handleRegionSelect = (regionId) => {
    setSelectedRegionId(regionId);
  };

  // 투표 처리
  const handleVote = async () => {
    if (getVotedCandidate()) {
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

      saveVotedCandidate(selectedCandidate.id, selectedRegionId);
      setIsVoted(true);
      toast.success(`${selectedCandidate.name} 후보에게 투표 완료되었습니다.`);

      // 커스텀 이벤트 발생: 투표 완료
      window.dispatchEvent(
        new CustomEvent('vote:change', {
          detail: { candidateId: selectedCandidate.id },
        })
      );
    } catch (err) {
      toast.error('투표 전송 실패: 서버 문제 또는 네트워크 오류');
      console.error(err);
    }
  };

  // 투표 취소 처리
  const handleCancelVote = async () => {
    const selectedCandidate = candidates.find((candidate) => candidate.id === selected);

    try {
      await cancelVote({
        region: selectedRegionId,
        candidate: selectedCandidate.id,
      });

      localStorage.removeItem('voteinfo');
      setSelectedRegionId(null);
      selectCandidate(null);
      setIsVoted(false);
      toast.success('투표가 취소되었습니다.');

      // 커스텀 이벤트 발생: 투표 취소
      window.dispatchEvent(
        new CustomEvent('vote:change', {
          detail: { candidateId: null },
        })
      );
    } catch (err) {
      toast.error('투표 취소 실패: 서버 문제 또는 네트워크 오류');
      console.error(err);
    }
  };

  // 초기 로딩 시 로컬 스토리지에서 투표 정보 복원
  useEffect(() => {
    const candidateId = getVotedCandidate();
    if (candidateId) {
      const stored = localStorage.getItem('voteinfo');
      const { regionId } = JSON.parse(stored);
      setSelectedRegionId(regionId);
      selectCandidate(candidateId);
      setIsVoted(true);
    }
  }, []);

  return (
    <div className="mw-1280 pb-24 md:pb-36">
      <VoteHeader />
      <RegionSelect selectedRegionId={selectedRegionId} onRegionSelect={handleRegionSelect} />
      <div className="mx-auto mt-3 mb-6 flex w-full max-w-[700px] flex-col gap-3 md:mt-9 md:mb-9 md:gap-9">
        {candidates.map((candidate) => (
          <CandidateCard
            key={candidate.id}
            image={candidateImages[candidate.image]}
            name={candidate.name}
            party={candidate.party}
            slogan={candidate.slogan}
            selected={selected === candidate.id}
            onClick={() => selectCandidate(candidate.id)}
          />
        ))}
      </div>

      {isVoted ? (
        <Button className="mx-auto" onClick={handleCancelVote}>
          취소하기
        </Button>
      ) : (
        <Button className="mx-auto" onClick={handleVote} disabled={selected === null}>
          투표하기
        </Button>
      )}

      <Disclaimer />
    </div>
  );
};

export default Vote;
