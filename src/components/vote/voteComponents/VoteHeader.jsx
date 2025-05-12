import React from 'react';

const VoteHeader = () => {
  return (
    <div className="text-center mb-6">
      <h1 className="text-2xl font-bold mb-2">나는 누구의 공약에 공감할까?</h1>
      <p className="text-sm text-gray-600">
        후보들의 주요 공약을 비교해보고, <br />
        지금 내가 가장 공감하는 정책과 가까운 후보를 선택해보세요.
      </p>
    </div>
  );
};

export default VoteHeader;
