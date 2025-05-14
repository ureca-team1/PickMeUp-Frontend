import React from 'react';
import voted from '../images/voted.png';
import unvoted from '../images/unvoted.png';

const CandidateCard = ({ image, name, party, slogan, selected, onClick }) => {
  return (
    <div
      className="mx-auto flex w-full max-w-full items-center justify-between gap-4 rounded-2xl border-3 px-3 py-2 md:max-w-[700px] md:gap-6 md:rounded-2xl md:border-4 md:px-6 md:py-3"
      onClick={onClick}
    >
      {/* 후보 이미지 */}
      <img
        src={image}
        alt={name}
        className="h-12 w-12 rounded-full border-4 object-cover md:h-14 md:w-14 dark:border-white"
      />

      {/* 이름, 정당, 슬로건 */}
      <div className="flex-1">
        <p className="text-base font-bold text-gray-800 md:text-xl dark:text-white">
          {name}{' '}
          <span className="text-sm text-gray-500 md:text-lg dark:text-gray-300">{party}</span>
        </p>
        <p className="text-sm text-gray-700 md:text-2xl dark:text-white">“{slogan}”</p>
      </div>
      {/* 선택 상태 아이콘 */}
      <img src={selected ? voted : unvoted} alt="투표 상태" className="h-8 w-8" />
    </div>
  );
};

export default CandidateCard;
