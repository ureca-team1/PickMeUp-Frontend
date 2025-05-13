import React from 'react';

const VoteButton = ({ disabled, onClick }) => {
  return (
    <div className="mt-6 flex justify-center">
      <button
        onClick={onClick}
        disabled={disabled}
        className={`flex h-10 w-32 items-center justify-center rounded-md text-sm font-semibold text-white transition md:h-10 md:w-32 md:text-base ${disabled ? 'cursor-not-allowed bg-gray-300' : 'bg-black hover:bg-gray-900'}`}
      >
        투표하기
      </button>
    </div>
  );
};

export default VoteButton;
