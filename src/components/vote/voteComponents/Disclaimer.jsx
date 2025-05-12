import React from 'react';

const Disclaimer = () => {
  return (
    <div className="mt-6 w-full flex justify-center">
      <div className="text-xs text-gray-400 leading-relaxed text-center inline-block">
        <p>※ 본 페이지는 실제 선거와 무관한 모의 체험 콘텐츠입니다.</p>
        <p className="whitespace-nowrap">
          모든 데이터는 사용자 참여 기반의 체험용으로 수집되며, 실제 선거, 지지율, 결과와는 아무
          관련이 없습니다.
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;
