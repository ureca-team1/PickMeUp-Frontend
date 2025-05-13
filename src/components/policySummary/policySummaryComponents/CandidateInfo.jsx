import React from 'react';
import CandidateProfile from './CandidateProfile';
import CandidateSlider from './CandidateSlider';
import PolicyList from './PolicyList';

const CandidateInfo = ({ candidate, partyColor, policies }) => {
  return (
    <div className="candidate-info mw-1280 md:w-[1200px]">
      {' '}
      {/* md 이상에서는 1200px, 그 외는 full */}
      <CandidateProfile imgSrc={candidate.image} name={candidate.name} partyColor={partyColor} />
      <CandidateSlider candidate={candidate} />
      <PolicyList policies={policies} /> {/* 공약 리스트 전달 */}
    </div>
  );
};

export default CandidateInfo;
