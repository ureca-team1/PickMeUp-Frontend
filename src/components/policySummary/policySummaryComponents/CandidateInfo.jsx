import React from 'react';
import CandidateSlider from './CandidateSlider';
import PolicyList from './PolicyList';

const CandidateInfo = ({ candidate }) => {
  return (
    <div>
     <CandidateSlider/>
      <PolicyList/>
      {/* 공약 리스트 표시 */}
      
    </div>
  );
};

export default CandidateInfo;
