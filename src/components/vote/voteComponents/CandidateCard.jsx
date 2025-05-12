import React from 'react';
import voted from '../images/voted.png';
import unvoted from '../images/unvoted.png';

const CandidateCard = ({ image, name, party, slogan, selected, onClick }) => {
  return (
    <div
      className="border-3 rounded-2xl py-2 px-4 flex items-center justify-between gap-4"
      onClick={onClick}
    >
      {/* 후보 이미지 */}
      <img src={image} alt={name} className="w-10 h-10 rounded-full object-cover" />

      {/* 이름, 정당, 슬로건 */}
      <div className="flex-1">
        <p className="text-sm font-bold text-gray-800">
          {name} <span className="text-xs text-gray-500">{party}</span>
        </p>
        <p className="text-sm text-gray-700">“{slogan}”</p>
      </div>

      {/* 선택 상태 아이콘 */}
      <img src={selected ? voted : unvoted} alt="투표 상태" className="w-10 h-10" />
    </div>
  );
};

export default CandidateCard;
