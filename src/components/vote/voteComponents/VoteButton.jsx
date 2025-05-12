import React from 'react';

const VoteButton = ({ disabled, onClick }) => {
  return (
    <div className="flex justify-center mt-6">
      <button
        onClick={onClick}
        disabled={disabled}
        className={`w-32 h-10 flex items-center justify-center rounded-md text-white text-base font-semibold transition
          ${disabled ? 'bg-gray-300 cursor-not-allowed' : 'bg-black hover:bg-gray-900'}`}
      >
        투표하기
      </button>
    </div>
  );
};

export default VoteButton;
