// components/approvalRating/SkeletonApprovalRating.jsx - 실데이터 기반 스켈레톤

const SkeletonApprovalRating = () => {
  return (
    <div className="mw-1280 flex animate-pulse flex-col items-center pt-10 pb-24 md:pt-20 md:pb-40">
      {/* 타이틀 */}
      <div className="mb-7 text-center md:mb-14">
        <div className="mx-auto mb-2 h-8 w-40 rounded bg-gray-300 md:h-10 md:w-56" />
        <div className="h-4 w-60 rounded bg-gray-200 md:h-5 md:w-80" />
      </div>

      {/* 드롭다운 */}
      <div className="mb-10 w-full max-w-[700px] px-4">
        <div className="flex justify-end">
          <div className="h-10 w-32 rounded-md bg-gray-300" />
        </div>
      </div>

      {/* 모바일 바 차트 */}
      <div className="flex w-full max-w-[700px] flex-col gap-3 px-4 md:hidden">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center justify-start gap-3 pl-6">
            <div className="flex w-20 shrink-0 flex-col gap-1 text-left">
              <div className="h-3 w-16 rounded bg-gray-300" />
              <div className="h-4 w-14 rounded bg-gray-300" />
            </div>
            <div className="flex w-full items-center">
              <div className="h-6 w-24 rounded bg-gray-200" />
            </div>
          </div>
        ))}
      </div>

      {/* PC 바 차트 */}
      <div className="mt-60 hidden items-end justify-center gap-8 md:flex">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex w-[100px] flex-col items-center text-center">
            <div className="relative w-full" style={{ height: '220px' }}>
              <div className="absolute bottom-0 h-[80px] w-20 rounded bg-gray-300" />
              <div className="absolute bottom-[80px] h-[88px] w-20 rounded-full bg-gray-200" />
            </div>
            <div className="mt-4 mb-1 h-3 w-16 rounded bg-gray-300" />
            <div className="h-4 w-20 rounded bg-gray-300" />
          </div>
        ))}
      </div>

      {/* 하단 설명 */}
      <p className="text-independent mt-7 mb-24 text-center text-xs leading-[1.8] md:mt-9 md:mb-32 md:text-base">
        ※ 이 자료는 중앙선거여론조사심의위원회에서 제공하는 <br />
        여론조사 결과와 모의 투표 결과를 합산한 자료입니다.
      </p>
    </div>
  );
};

export default SkeletonApprovalRating;
