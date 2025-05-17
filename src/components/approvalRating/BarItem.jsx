const BarItem = ({ name, party, height, percent, image, color }) => {
  const isSmall = percent < 5;
  const displaySize = isSmall ? 11 : height * 2;
  const isLabor = party === '민주노동당';
  const textColor = isLabor ? 'text-black' : 'text-white';

  const barHeight = displaySize * 2; // 이미지 높이 고정값

  return (
    <div>
      {/* 모바일 */}
      <div className="flex items-center justify-start gap-3 pl-6 md:hidden">
        <div className="flex w-20 shrink-0 flex-col text-left">
          <span className="text-sm text-[#595959]">{party}</span>
          <span className="font-bold">{name}</span>
        </div>

        <div className="flex w-full items-center">
          <div
            className={`flex h-10 items-center pl-2 text-xs font-bold ${textColor}`}
            style={{
              width: `${displaySize + 2}px`,
              minWidth: '35px',
              backgroundColor: `var(${color})`,
              borderRadius: '1px',
            }}
          >
            {isSmall ? '5% 미만' : `${percent.toFixed(1)}%`}
          </div>
        </div>
      </div>

      {/* PC */}
      <div className="hidden w-[100px] flex-col items-center text-center md:flex">
        <div className="relative w-full" style={{ height: '220px' }}>
          <div
            className={`absolute bottom-0 flex items-center justify-center text-sm font-bold ${textColor}`}
            style={{
              height: `${barHeight}px`,
              width: '88px',
              backgroundColor: `var(${color})`,
            }}
          >
            {isSmall ? '5% 미만' : `${percent.toFixed(1)}%`}
          </div>

          {image && (
            <img
              src={image}
              alt={name}
              className="absolute object-cover"
              style={{
                width: '88px',
                height: '88px',
                bottom: `${barHeight}px`,
              }}
            />
          )}
        </div>
        {/* 정당 및 후보자 이름 */}
        <div className="mt-4 mb-1 leading-tight text-gray-500">{party || '\u00A0'}</div>
        <div className="text-lg font-bold md:text-2xl">{name}</div>
      </div>
    </div>
  );
};

export default BarItem;
