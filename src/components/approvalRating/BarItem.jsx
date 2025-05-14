import React from 'react';

const BarItem = ({ name, party, percent, image, color }) => {
  return (
    <div className="flex flex-col items-center mx-2 w-20 text-center">
      <div className="w-full aspect-square">
        <img src={image} alt={name} className="w-full h-full object-cover rounded-md" />
      </div>

      {/* 바 그래프 영역 */}
      <div className="relative h-52 w-full bg-gray-200 mt-2 rounded-md overflow-hidden">
        <div
          className="absolute bottom-0 w-full flex items-center justify-center text-white text-sm font-bold"
          style={{
            height: `${percent}%`,
            backgroundColor: color,
          }}
        >
          {percent.toFixed(1)}
        </div>
      </div>

      {/* 정당, 이름 */}
      <div className="text-xs text-gray-500 mt-1">{party}</div>
      <div className="text-sm font-bold">{name}</div>
    </div>
  );
};

export default BarItem;
