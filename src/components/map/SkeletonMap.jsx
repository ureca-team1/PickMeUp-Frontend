const SkeletonMap = () => {
  return (
    <div className="mw-1280 flex animate-pulse flex-col items-center pb-32 md:pb-52">
      <div className="mb-8 text-center md:mb-12">
        <div className="mx-auto mb-4 h-8 w-48 rounded bg-gray-200 md:w-64 dark:bg-neutral-700" />
        <div className="mx-auto mb-2 h-4 w-60 rounded bg-gray-200 dark:bg-neutral-700" />
        <div className="mx-auto h-4 w-44 rounded bg-gray-200 dark:bg-neutral-700" />
      </div>

      <div className="mb-9 flex w-full max-w-[940px] flex-col rounded-2xl border border-dashed border-gray-300 p-6 md:mb-11 md:flex-row md:items-center md:justify-center dark:border-neutral-700">
        <div className="mb-6 flex items-center justify-center md:mr-6 md:mb-0">
          <div className="h-[300px] w-[300px] rounded-xl bg-gray-300 dark:bg-neutral-700" />
        </div>
        <div className="flex w-full flex-col gap-5">
          {Array.from({ length: 2 }).map((_, idx) => (
            <div key={idx}>
              <div className="mb-2 h-6 w-48 rounded bg-gray-200 dark:bg-neutral-700" />
              <div className="mb-1 h-4 w-full rounded bg-gray-200 dark:bg-neutral-700" />
              <div className="h-4 w-4/5 rounded bg-gray-200 dark:bg-neutral-700" />
            </div>
          ))}
          <div className="mt-2 flex gap-4">
            <div className="h-10 w-full rounded bg-gray-300 dark:bg-neutral-700" />
            <div className="h-10 w-full rounded bg-gray-300 dark:bg-neutral-700" />
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col gap-7 md:max-w-[940px] md:gap-8">
        {Array.from({ length: 2 }).map((_, idx) => (
          <div key={idx}>
            <div className="mb-4 h-6 w-64 rounded bg-gray-200 px-3 dark:bg-neutral-700" />
            <div className="flex flex-col gap-2 px-3">
              {Array.from({ length: 3 }).map((__, i) => (
                <div key={i} className="h-4 w-full rounded bg-gray-200 dark:bg-neutral-700" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonMap;
