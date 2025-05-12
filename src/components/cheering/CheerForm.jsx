/*
사용자가 응원 메시지를 입력하고 제출할 수 있는 폼
후보자 정보는 로컬 스토리지에서 불러옴

message   입력 중인 응원 메시지
charCount   현재 입력 글자 수
maxLength   최대 입력 글자 수

handleMessageChange: 30자 제한을 체크하면서 메시지 업데이트
*/
import { useState } from 'react';

const CheerForm = () => {
  const [message, setMessage] = useState('');
  const [charCount, setCharCount] = useState(0);
  const maxLength = 30;

  const handleMessageChange = (e) => {
    const text = e.target.value;
    if (text.length <= maxLength) {
      setMessage(text);
      setCharCount(text.length);
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <form className="w-full max-w-[865px] border-3 border-[#292B2E] rounded-2xl p-6 relative">
        <div className="mb-4">
          <span className="text-2xl font-nanumSquare">후보님께</span>
        </div>

        <div className="relative">
          <textarea
            value={message}
            onChange={handleMessageChange}
            placeholder="응원을 남겨주세요"
            className="w-full p-5 bg-[#f5f5f5]/60 rounded-xl h-24 resize-none focus:outline-none font-nanumSquare"
          />
          <span className="absolute bottom-2 right-3 text-gray-500 text-sm font-nanumSquare">
            {charCount} / {maxLength}
          </span>
        </div>
      </form>
    </div>
  );
};

export default CheerForm;
