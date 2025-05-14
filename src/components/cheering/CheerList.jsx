import { useState } from 'react';
import CheerItem from './CheerItem';

const CheerList = ({ messages }) => {
  const [showMore, setShowMore] = useState(false);
  const initialDisplayCount = 6;

  if (!messages || messages.length === 0) {
    return (
      <div className="text-center text-gray-500">
        아직 제출된 메시지가 없어요. 응원 메시지를 입력하고 첫 번째 응원의 주인공이 되어보세요!
      </div>
    );
  }

  const displayMessages = showMore ? messages : messages.slice(0, initialDisplayCount);

  const handleShowMore = () => {
    setShowMore(true);
  };

  return (
    <div className="relative w-full">
      <div className="flex flex-col flex-wrap items-center justify-center gap-4 md:flex-row">
        {displayMessages.map((message) => (
          <CheerItem key={message.id} message={message} />
        ))}
      </div>

      {/* 더 많은 메시지가 있고 아직 모두 표시되지 않았을 때만 점 3개 표시 */}
      {!showMore && messages.length > initialDisplayCount && (
        <div
          className="mt-5 flex cursor-pointer flex-col items-center gap-3 md:mt-8"
          onClick={handleShowMore}
        >
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="h-[5px] w-[5px] rounded-full bg-[#B7B7B7] md:h-[10px] md:w-[10px]"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CheerList;
