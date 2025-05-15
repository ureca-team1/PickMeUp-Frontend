const BarItem = ({ name, party, height, percent, image, color }) => {
  const isSmall = percent < 5;
  const displaySize = isSmall ? 20 : height * 2;
  const isLabor = party === '민주노동당';
  const textColor = isLabor ? 'text-black' : 'text-white';

  return (
    <div>
      {/* 모바일 */}
      <div className="flex items-center justify-start gap-x-2 py-2 pr-2 pl-6 md:hidden">
        <div className="flex w-20 flex-shrink-0 flex-col text-left">
          <span className="text-sm leading-none text-gray-500">{party}</span>
          <span className="text-base leading-tight font-bold">{name}</span>
        </div>

        {/* 그래프 */}
        <div className="flex w-full items-center">
          <div
            className={`flex h-8 items-center px-2 text-xs font-bold ${textColor}`}
            style={{
              width: `${displaySize}px`,
              minWidth: '40px',
              backgroundColor: `var(${color})`,
              borderRadius: '2px',
            }}
          >
            {isSmall ? '5% 미만' : `${percent.toFixed(1)}%`}
          </div>
        </div>
      </div>

      {/* PC*/}
      <div className="mx-2 hidden w-24 flex-col items-center text-center md:flex">
        {image && (
          <div className="aspect-square w-full">
            <img src={image} alt={name} className="h-full w-full object-cover" />
          </div>
        )}

        {/* 그래프 */}
        <div
          className={`flex w-full items-center justify-center text-base font-bold ${textColor}`}
          style={{
            height: `${displaySize * 2}px`,
            backgroundColor: `var(${color})`,
          }}
        >
          {isSmall ? '5% 미만' : `${percent.toFixed(1)}%`}
        </div>

        <div className="mt-2 text-base leading-tight text-gray-500">{party || '\u00A0'}</div>
        <div className="text-lg font-bold">{name}</div>
      </div>
    </div>
  );
};

export default BarItem;
