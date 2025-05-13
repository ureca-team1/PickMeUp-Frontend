import React from 'react';

const CancelVoteButton = ({ onClick }) => {
  return (
    <div className="flex justify-center mt-6">
      <button
        onClick={onClick}
        className="w-32 h-10 flex items-center justify-center rounded-md bg-gray-500 text-white font-semibold hover:bg-gray-600 transition"
      >
        투표 취소하기
      </button>
    </div>
  );
};

export default CancelVoteButton;
