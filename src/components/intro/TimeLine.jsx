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
      className={`flex items-center gap-4 md:flex-col ${active ? '-translate-x-4 md:-translate-y-4 md:translate-x-0' : ''}`}
    >
      <div
        className={`rounded-full flex items-center justify-center  border-[5px] border-primary ${active ? 'bg-secondary w-12 h-12 md:w-[60px] md:h-[60px]' : 'bg-white w-4 h-4  md:w-8 md:h-8'}`}
      >
        {active && <div className="bg-primary rounded-full w-4 h-4 md:w-5 md:h-5" />}
      </div>
      <div className="md:text-center">
        <h4
          className={`whitespace-pre-line mb-0.5 md:mb-1 ${active ? 'font-extrabold text-2xl md:text-[1.75rem]' : 'md:text-2xl text-xl font-bold'}`}
        >
          {title}
        </h4>
        <span className="text-[#595959] md:text-lg text-sm">{subTitle}</span>
      </div>
    </div>
  );
};

const ContentItem = ({ title, subTitle, active = false }) => {
  return (
    <div className="md:text-center">
      <h4
        className={`whitespace-pre-line mb-0.5 md:mb-1 ${active ? 'font-extrabold text-2xl md:text-[1.75rem]' : 'md:text-2xl text-xl font-bold'}`}
      >
        {title}
      </h4>
      <span className="text-[#595959] md:text-lg text-sm">{subTitle}</span>
    </div>
  );
};

function TimeLine() {
  return (
    <div className="relative mx-auto w-fit flex items-center md:flex-col">
      {/* 모바일 라인 */}
      <div
        className="w-[5px] h-[620px] translate-x-1.5 md:hidden -z-10 bg-[#E4E4E4] md:w-screen absolute"
        aria-hidden="true"
      />
      {/* 데스크탑 라인 */}
      <hr
        className="border-t-[5px] hidden md:block translate-y-3 -z-10 border-[#E4E4E4] md:w-screen absolute"
        aria-hidden="true"
      />
      <div className="flex flex-col md:flex-row gap-10 md:gap-16">
        {timelines.map((item) => (
          <NodeItem title={item.title} active={item.active} subTitle={item.subTitle} />
        ))}
      </div>
    </div>
  );
}

export default TimeLine;
