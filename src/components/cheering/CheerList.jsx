import { useState } from 'react';
import CheerItem from './CheerItem';

const CheerList = ({ messages }) => {
  const [showMore, setShowMore] = useState(false);
  const initialDisplayCount = 6;

  if (!messages || messages.length === 0) {
    return (
      <div className="text-center mt-8 text-gray-500 font-nanumSquare">
        아직 제출된 메시지가 없어요. 응원 메시지를 입력하고 첫 번째 응원의 주인공이 되어보세요!
      </div>
    );
  }

  const displayMessages = showMore ? messages : messages.slice(0, initialDisplayCount);

  const handleShowMore = () => {
    setShowMore(true);
  };

  return (
    <div className="w-full mt-8 relative">
      <div className="flex flex-wrap justify-center gap-4 md:flex-row flex-col items-center">
        {displayMessages.map((message) => (
          <CheerItem key={message.id} message={message} />
        ))}
      </div>

      {/* 더 많은 메시지가 있고 아직 모두 표시되지 않았을 때만 점 3개 표시 */}
      {!showMore && messages.length > initialDisplayCount && (
        <div
          className="flex flex-col items-center gap-3 mt-8 cursor-pointer"
          onClick={handleShowMore}
        >
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="bg-[#B7B7B7] rounded-full w-[5px] h-[5px] md:w-[10px] md:h-[10px]"
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CheerList;
