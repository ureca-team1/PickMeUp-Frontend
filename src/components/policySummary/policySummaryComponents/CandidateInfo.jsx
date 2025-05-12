import React from 'react';
import CandidateSlider from './CandidateSlider';
import PolicyList from './PolicyList';
import CandidateProfile from './CandidateProfile';

const CandidateInfo = ({ candidate, partyColor }) => {
  return (
    <div>
    <CandidateProfile imgSrc={candidate.image} name={candidate.name} partyColor={partyColor}/>
    <CandidateSlider candidate={candidate}/>
    <PolicyList/>
      {/* 공약 리스트 표시 */}
      
    </div>
  );
};

export default CandidateInfo;
