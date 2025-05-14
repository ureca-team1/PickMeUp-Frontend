import React from 'react';

const BarItem = ({ name, party, height, percent, image, color }) => {
  const isSmall = percent <= 5;
  const displayHeight = isSmall ? 5 : height;
  const isLabor = party === '민주노동당';
  const textLaborColor = isLabor ? 'text-black' : 'text-white';

  return (
    <div className="mx-2 flex w-20 flex-col items-center text-center md:w-24">
      <div className="flex w-full flex-col items-center">
        {image && (
          <div className="aspect-square w-full">
            <img src={image} alt={name} className="h-full w-full rounded-t-md object-cover" />
          </div>
        )}

        <div
          className={`flex w-full items-center justify-center text-sm font-bold ${textLaborColor}`}
          style={{
            height: `${displayHeight * 3}px`, // 비율에 따라 크기 조절
            backgroundColor: `var(${color})`,
            borderBottomLeftRadius: '8px',
            borderBottomRightRadius: '8px',
          }}
        >
          {isSmall ? '5% 미만' : typeof percent === 'number' ? `${percent.toFixed(1)}%` : '0.0%'}
        </div>
      </div>

      <div className="mt-1 text-base text-gray-500">{party || '\u00A0'}</div>
      <div className="text-base font-bold">{name}</div>
    </div>
  );
};

export default BarItem;
