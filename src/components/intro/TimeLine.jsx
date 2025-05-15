const timelines = [
  {
    title: '예비후보자\n등록 신청',
    subTitle: '25.04.04',
    active: false,
  },
  {
    title: '선거인명부\n작성',
    subTitle: '25.05.06~05.10',
    active: false,
  },
  {
    title: '각 정당 후보자\n등록 기한',
    subTitle: '25.05.11',
    active: false,
  },
  {
    title: '선거 운동\n기간',
    subTitle: '25.05.12~06.02',
    active: true,
  },
  {
    title: '사전 투표\n기간',
    subTitle: '25.05.29~05.30',
    active: false,
  },
  {
    title: '21대 대통령 선거\n본 투표',
    subTitle: '25.06.03',
    active: false,
  },
];

const NodeItem = ({ title, subTitle, active = false }) => {
  return (
    <div
      key={title}
      className={`flex items-center gap-4 md:flex-col ${active ? '-translate-x-4 md:translate-x-0 md:-translate-y-4' : ''}`}
    >
      <div
        className={`dark:bg-whiteborder-primary flex items-center justify-center rounded-full border-[5px] dark:bg-black ${active ? 'bg-secondary h-12 w-12 md:h-[60px] md:w-[60px] dark:bg-black' : 'h-4 w-4 bg-white md:h-8 md:w-8 dark:bg-black'}`}
      >
        {active && (
          <div className="bg-primary dark:bg h-4 w-4 rounded-full md:h-5 md:w-5 dark:bg-white" />
        )}
      </div>
      <div className="md:text-center">
        <h4
          className={`mb-0.5 whitespace-pre-line md:mb-1 ${active ? 'text-2xl font-extrabold md:text-[1.75rem]' : 'text-xl font-bold md:text-2xl'}`}
        >
          {title}
        </h4>
        <span className="text-sm text-[#595959] md:text-lg dark:text-gray-400">{subTitle}</span>
      </div>
    </div>
  );
};

function TimeLine() {
  return (
    <div className="relative mx-auto flex w-fit items-center md:flex-col">
      {/* 모바일 라인 */}
      <div
        className="absolute h-[620px] w-[5px] translate-x-1.5 bg-[#E4E4E4] md:hidden"
        aria-hidden="true"
      />

      {/* 데스크탑 라인 */}
      <hr
        className="absolute hidden translate-y-3 border-t-[5px] border-[#E4E4E4] md:block md:w-screen"
        aria-hidden="true"
      />

      <div className="z-10 flex flex-col gap-10 md:flex-row md:gap-16">
        {timelines.map((item) => (
          <NodeItem
            key={item.title}
            title={item.title}
            active={item.active}
            subTitle={item.subTitle}
          />
        ))}
      </div>
    </div>
  );
}

export default TimeLine;
