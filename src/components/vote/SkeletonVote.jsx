// components/vote/SkeletonVote.jsx

const SkeletonVote = () => {
  return (
    <div className="mw-1280 animate-pulse pb-24 md:pb-36">
      {/* 제목 + 문단 */}
      <div className="mb-7 space-y-4 text-center md:mb-16">
        <div className="mx-auto h-8 w-48 rounded bg-gray-300 md:h-10 md:w-64" />
        <div className="mx-auto h-4 w-64 rounded bg-gray-300 md:h-5 md:w-[400px]" />
      </div>

      {/* 지역 선택 드롭다운 */}
      <div className="mx-auto mb-6 flex h-10 max-w-[700px] items-center gap-4">
        <div className="h-4 w-32 rounded bg-gray-300" />
        <div className="h-10 flex-1 rounded bg-gray-300" />
      </div>

      {/* 후보 카드들 */}
      <div className="mx-auto mb-9 flex max-w-[700px] flex-col gap-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="flex items-center justify-between gap-4 rounded-2xl border-2 p-4 md:gap-6 md:p-5"
          >
            <div className="h-[50px] w-[50px] rounded-full bg-gray-300 md:h-20 md:w-20" />
            <div className="flex flex-1 flex-col gap-2">
              <div className="h-4 w-32 rounded bg-gray-300 md:h-5 md:w-40" />
              <div className="h-4 w-48 rounded bg-gray-200 md:h-5 md:w-60" />
            </div>
            <div className="h-6 w-6 rounded-full bg-gray-300 md:h-9 md:w-9" />
          </div>
        ))}
      </div>

      {/* 버튼 */}
      <div className="mx-auto h-10 w-32 rounded bg-gray-300 md:h-12 md:w-40" />

      {/* 디스클레이머 */}
      <div className="mt-6 h-10 w-full rounded bg-gray-100 md:mt-10 md:h-14" />
    </div>
  );
};

export default SkeletonVote;
