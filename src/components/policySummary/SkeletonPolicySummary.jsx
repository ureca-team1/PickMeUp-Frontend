const SkeletonPolicySummary = () => {
  return (
    <div className="mb-32 flex animate-pulse flex-col items-center justify-center px-4 text-center md:px-0">
      <div className="mb-8 md:mb-11">
        <div className="mb-4 h-8 w-40 rounded bg-gray-200 md:w-60 dark:bg-neutral-700"></div>
        <div className="mx-auto h-4 w-64 rounded bg-gray-200 md:w-[360px] dark:bg-neutral-700" />
        <div className="mx-auto mt-2 h-4 w-52 rounded bg-gray-200 md:w-[300px] dark:bg-neutral-700" />
      </div>

      <div className="mb-11 flex flex-wrap justify-center gap-4 md:mb-16">
        {Array.from({ length: 4 }).map((_, idx) => (
          <div
            key={idx}
            className="h-8 w-20 rounded-full bg-gray-300 md:h-10 md:w-28 dark:bg-neutral-800"
          ></div>
        ))}
      </div>

      <div className="w-full space-y-12 md:max-w-[730px]">
        {Array.from({ length: 2 }).map((_, idx) => (
          <div key={idx} className="space-y-6">
            <div className="flex flex-col items-center gap-4 md:gap-6">
              <div className="h-20 w-20 rounded-full bg-gray-300 md:h-[100px] md:w-[100px] dark:bg-neutral-700"></div>
              <div className="h-6 w-32 rounded bg-gray-300 dark:bg-neutral-700"></div>
            </div>

            <div className="mx-auto h-[62px] w-[320px] rounded bg-gray-200 md:w-[462px] dark:bg-neutral-800"></div>

            <div className="space-y-4">
              {Array.from({ length: 2 }).map((_, j) => (
                <div key={j} className="h-4 w-full rounded bg-gray-200 dark:bg-neutral-800"></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonPolicySummary;
