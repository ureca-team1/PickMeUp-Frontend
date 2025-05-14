import React from 'react';
import voted from '../images/voted.png';
import unvoted from '../images/unvoted.png';

const CandidateCard = ({ image, name, party, slogan, selected, onClick }) => {
  return (
    <div
      className="mx-auto flex w-full max-w-full items-center justify-between gap-4 rounded-2xl border-3 px-3 py-2 md:max-w-[700px]  md:gap-6 md:rounded-2xl md:border-4 md:px-6 md:py-3"
      onClick={onClick}
    >
      {/* 후보 이미지 */}
      <img src={image} alt={name} className="h-12 w-12 md:h-14 md:w-14 rounded-full object-cover" />
      {/* 이름, 정당, 슬로건 */}
      <div className="flex-1">
        <p className="text-base md:text-xl font-bold text-gray-800">
          {name} <span className="text-sm md:text-lg text-gray-500">{party}</span>
        </p>
        <p className="text-sm md:text-2xl text-gray-700">“{slogan}”</p>
      </div>
      {/* 선택 상태 아이콘 */}
      <img src={selected ? voted : unvoted} alt="투표 상태" className="h-8 w-8 md:h-12 md:w-12" />
    </div>
  );
};

export default CandidateCard;
