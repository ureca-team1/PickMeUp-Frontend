/*
응원 메시지들을 나열
초기엔 6개만 보여주고, 더보기 버튼 클릭 시 전체 표시

messages를 받아와서 조건에 따라 6개 또는 전체 렌더링
showMore가 false일 경우 slice(0, 6)
showMore가 true가 되면 전체 메시지 렌더링

메시지가 없을 경우 안내 문구 출력
점 3개(더보기 버튼)는 onClick 시 setShowMore(true)
*/
import { useState } from 'react';
import CheerItem from './CheerItem';

const CheerList = ({ messages }) => {
  const [showMore, setShowMore] = useState(false);
  const initialDisplayCount = 6; // 초기에 보여줄 메시지 수

  if (!messages || messages.length === 0) {
    return (
      <div className="text-center mt-8 text-gray-500 font-nanumSquare">
        아직 제출된 메시지가 없어요. 응원 메시지를 입력하고 첫 번째 응원의 주인공이 되어보세요!
      </div>
    );
  }

  // 표시할 메시지 결정
  const displayMessages = showMore ? messages : messages.slice(0, initialDisplayCount);

  const handleShowMore = () => {
    setShowMore(true);
  };

  return (
    <div className="w-full mt-8 relative">
      <div className="flex flex-wrap justify-center gap-4">
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
          <div className="w-2.5 h-2.5 rounded-full bg-[#B7B7B7]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#B7B7B7]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#B7B7B7]"></div>
        </div>
      )}
    </div>
  );
};

export default CheerList;
