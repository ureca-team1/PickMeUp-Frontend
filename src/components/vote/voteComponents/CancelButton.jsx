import React from 'react';

const CancelVoteButton = ({ onClick }) => {
  return (
    <div className="mt-6 flex justify-center">
      <button
        onClick={onClick}
        className="flex h-10 w-32 items-center justify-center rounded-md bg-gray-500 font-semibold text-white transition hover:bg-gray-600"
      >
        투표 취소하기
      </button>
    </div>
  );
};

export default CancelVoteButton;
