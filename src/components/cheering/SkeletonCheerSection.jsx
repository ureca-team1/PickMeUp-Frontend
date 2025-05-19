// components/cheering/SkeletonCheerSection.jsx - 실제 구조 기반 스켈레톤

const SkeletonCheerSection = () => {
  return (
    <div className="mw-1280 !mb-[72px] flex animate-pulse flex-col items-center md:!mb-52">
      {/* 제목 */}
      <div className="mb-7 text-center md:mb-10">
        <div className="mx-auto mb-2 h-8 w-40 rounded bg-gray-300 md:h-10 md:w-56" />
        <div className="h-4 w-60 rounded bg-gray-200 md:h-5 md:w-80" />
      </div>

      {/* 응원 입력 폼 */}
      <div className="mx-auto mb-12 w-full max-w-[865px] rounded-lg border-3 border-gray-300 px-5 py-4 md:mb-16 md:rounded-2xl md:px-7 md:py-5 dark:border-gray-600">
        <div className="mb-4 h-5 w-32 rounded bg-gray-300 md:mb-5 md:h-7 md:w-40" />
        <div className="bg-secondary rounded-lg pb-3.5 text-right md:rounded-2xl md:pb-5">
          <div className="h-[4.25rem] w-full rounded bg-gray-200 md:h-[4.75rem]" />
          <div className="mt-1 h-3 w-10 self-end rounded bg-gray-300 md:h-4 md:w-14" />
        </div>
      </div>

      {/* 버튼 */}
      <div className="h-10 w-32 rounded bg-gray-400 md:h-12 md:w-40" />

      {/* 메시지 카드 */}
      <div className="mt-10 flex flex-col flex-wrap items-center justify-center gap-4 md:flex-row">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="min-w-[256px] rounded-lg bg-gray-200 px-2 py-3.5 md:rounded-2xl md:px-6 md:py-5"
          >
            <div className="h-4 w-40 rounded bg-gray-400 md:h-6 md:w-52" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonCheerSection;
