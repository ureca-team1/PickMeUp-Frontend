import React, { useState } from 'react';
import VoteHeader from './voteComponents/VoteHeader';
import CandidateCard from './voteComponents/CandidateCard';
import VoteButton from './voteComponents/VoteButton';
import Disclaimer from './voteComponents/Disclaimer';
import useVote from './useVote';

import { candidateImages } from './images/images';

import toast from 'react-hot-toast';
import RegionSelect from './voteComponents/RegionSelect';

const candidates = [
  {
    id: 1,
    image: candidateImages['이재명'],
    name: '이재명',
    party: '더불어 민주당',
    slogan: '이제부터 진짜 대한민국',
  },
  {
    id: 2,
    image: candidateImages['김문수'],
    name: '김문수',
    party: '국민의 힘',
    slogan: '새롭게 대한민국! 정정당당 김문수!',
  },
  {
    id: 3,
    image: candidateImages['이준석'],
    name: '이준석',
    party: '개혁신당',
    slogan: '미래를 여는 선택, 새로운 대통령 이준석',
  },
  {
    id: 4,
    image: candidateImages['권영국'],
    name: '권영국',
    party: '민주노동당',
    slogan: '정권교체를 넘어 사회대개혁으로',
  },
  {
    id: 5,
    image: candidateImages['구주와'],
    name: '구주와',
    party: '자유통일당',
    slogan: '광화문 정신! 젋은 대통령! 정치 교체',
  },
  {
    id: 6,
    image: candidateImages['황교안'],
    name: '황교안',
    party: '무소속',
    slogan: '부정선거 척결로 청년에게 미래를',
  },
  {
    id: 7,
    image: candidateImages['송진호'],
    name: '송진호',
    party: '무소속',
    slogan: '선(先)경제 후(後)정치',
  },
];

const Vote = () => {
  // 지역 선택 상태 변수
  const [selectedRegionId, setSelectedRegionId] = useState(null);
  // 후보자 선택 상태 변수
  const { selected, selectCandidate } = useVote();
  // 투표 버튼 활성화하기 위한 체크 박스 상태 변수
  const [agreedToNotice, setAgreedToNotice] = useState(false);

  const handleRegionSelect = (regionId) => {
    console.log('선택된 지역 ID:', regionId);
    setSelectedRegionId(regionId);
  };

  return (
    <div className="p-4 space-y-4 max-w-md mx-auto">
      <VoteHeader />

      <RegionSelect onRegionSelect={handleRegionSelect} />

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

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={agreedToNotice}
          onChange={(e) => setAgreedToNotice(e.target.checked)}
        />
        <span className="text-sm text-gray-600">
          지역 정보를 기반으로 지지율 분석이 진행됩니다.
        </span>
      </div>

      <VoteButton
        disabled={selected === null}
        onClick={() => {
          if (selectedRegionId === null) {
            toast.error('지역을 먼저 선택해주세요.');
            return;
          }

          if (!agreedToNotice) {
            toast.error('안내 문구에 동의해주세요.');
            return;
          }

          const selectedCandidate = candidates.find((candidate) => candidate.id === selected);
          toast.success(`${selectedCandidate.name} 후보에게 투표 완료되었습니다.`);
          console.log(`${selectedCandidate.name} 후보에게 투표 완료되었습니다.`);
        }}
      />

      <Disclaimer />
    </div>
  );
};

export default Vote;
