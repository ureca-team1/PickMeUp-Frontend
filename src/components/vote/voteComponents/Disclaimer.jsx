import React from 'react';

const Disclaimer = () => {
  return (
    <div className="mt-6 w-full px-4 text-center text-gray-400">
      <p className="text-sm leading-relaxed">
        ※ 본 페이지는 실제 선거와 무관한 모의 체험 콘텐츠입니다.
      </p>
      <p className="text-sm leading-relaxed md:whitespace-nowrap">
        모든 데이터는 사용자 참여 기반의 체험용으로 수집되며,
        <br className="md:hidden" />
        공식 지지율이나 선거 결과와는 관련이 없습니다.
      </p>
    </div>
  );
};

export default Disclaimer;
