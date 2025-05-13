import React from 'react';
import CandidateProfile from './CandidateProfile';
import CandidateSlider from './CandidateSlider';
import PolicyList from './PolicyList';

const CandidateInfo = ({ candidate, partyColor, policies }) => {
  return (
    <div className="candidate-info">
      <CandidateProfile imgSrc={candidate.image} name={candidate.name} partyColor={partyColor} />
      <CandidateSlider candidate={candidate} />
      <PolicyList policies={policies} /> {/* 공약 리스트 전달 */}
    </div>
  );
};

export default CandidateInfo;
