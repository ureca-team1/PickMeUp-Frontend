import React from 'react';

const VoteHeader = () => {
  return (
    <div className="mb-6 w-full px-4 text-center overflow-hidden">
      <h1 className="mb-2 text-2xl font-extrabold leading-snug md:text-5xl break-keep whitespace-nowrap">
        나는 누구의 공약에 공감할까?
      </h1>
      <p className="text-sm leading-relaxed md:text-2xl">
        후보들의 주요 공약을 비교해보고,
        <br className="hidden md:inline" />
        지금 내가 공감하는 정책과 가까운 후보를 선택해보세요.
      </p>
    </div>
  );
};

export default VoteHeader;
