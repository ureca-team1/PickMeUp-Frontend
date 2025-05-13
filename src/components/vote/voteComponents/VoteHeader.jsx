import React from 'react';

const VoteHeader = () => {
  return (
    <div className="mx-auto mb-6 max-w-md px-4 text-center md:px-0">
      <h1 className="mb-2 text-lg leading-snug font-bold md:text-2xl">
        나는 누구의 공약에 공감할까?
      </h1>
      <p className="text-xs leading-relaxed text-gray-600 md:text-sm">
        후보들의 주요 공약을 비교해보고, <br />
        지금 내가 공감하는 정책과 가까운 후보를 선택해 보세요.
      </p>
    </div>
  );
};

export default VoteHeader;
