import React from 'react';

const Disclaimer = () => {
  return (
    <div className="mt-6 flex w-full justify-center px-4">
      <div className="max-w-md text-center text-xs leading-relaxed text-gray-400">
        <p className="break-words">※ 실제 선거와 무관한 모의 체험 콘텐츠입니다.</p>
        <p className="mt-1 break-words">
          후보 이름, 결과 등은 단순한 사용자 선택 데이터이며,
          <br className="block sm:hidden" />
          공식 지지율이나 선거 결과와는 관련이 없습니다.
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;
