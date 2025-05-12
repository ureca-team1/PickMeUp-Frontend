//CheerForm.jsx
/*
사용자가 응원 메시지를 입력하고 제출할 수 있는 폼
후보자 정보는 로컬 스토리지에서 불러옴

message	입력 중인 응원 메시지
isSubmitting	제출 중 여부 (버튼 비활성화용)
charCount	현재 입력 글자 수
candidate	로컬 스토리지에서 불러온 후보자 이름

loadCandidateInfo: getVotedCandidate()로 후보자 이름 로딩
handleMessageChange: 30자 제한을 체크하면서 메시지 업데이트
handleSubmit: 메시지를 생성해 onAddMessage로 전달, 상태 초기화
handleTestButtonClick: 유레카 후보 정보를 로컬 스토리지에 저장하는 테스트용 버튼
*/
import { useState, useEffect } from 'react';
import { getVotedCandidate, saveVotedCandidate } from '../../utils/localStorage';
import SubmitButton from '../common/Button';

const CheerForm = () => {
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [candidate, setCandidate] = useState('');
  const maxLength = 30;

  // 후보자 정보 로드 함수
  const loadCandidateInfo = () => {
    const votedInfo = getVotedCandidate();
    if (votedInfo && votedInfo.name) {
      setCandidate(votedInfo.name);
    }
  };

  useEffect(() => {
    // 로컬 스토리지에서 투표한 후보자 정보 가져오기
    loadCandidateInfo();
  }, []);

  const handleMessageChange = (e) => {
    const text = e.target.value;
    if (text.length <= maxLength) {
      setMessage(text);
      setCharCount(text.length);
    }
  };

  const handleSubmit = async () => {
    if (!message.trim()) return;
    setIsSubmitting(true);

    try {
      const newMessage = {
        id: Date.now(),
        text: message,
        createdAt: new Date().toISOString(),
      };

      // 부모 컴포넌트에 새 메시지 전달
      // onAddMessage(newMessage);
      // 입력 필드 초기화
      setMessage('');
      setCharCount(0);
      console.log('응원 메시지 전송:', newMessage);
    } catch (err) {
      console.error('Error sending message:', err);
      alert('메시지 전송에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // 테스트 버튼: 유레카 후보 저장
  const handleTestButtonClick = () => {
    saveVotedCandidate({ name: '유레카' });
    loadCandidateInfo();
  };

  return (
    <div className="flex flex-col items-center w-full">
      <form className="w-full max-w-[865px] border-3 border-[#292B2E] rounded-2xl p-6 relative">
        <div className="mb-4">
          <span className="text-2xl font-nanumSquare">
            {candidate ? (
              <>
                <span className="font-extrabold underline text-black">{candidate}</span> 후보님께
              </>
            ) : (
              '후보님께'
            )}
          </span>
        </div>

        <div className="relative">
          <textarea
            value={message}
            onChange={handleMessageChange}
            placeholder="응원을 남겨주세요"
            className="w-full p-5 bg-[#f5f5f5]/60 rounded-xl h-24 resize-none focus:outline-none font-nanumSquare"
            disabled={isSubmitting}
          />
          <span className="absolute bottom-2 right-3 text-gray-500 text-sm font-nanumSquare">
            {charCount} / {maxLength}
          </span>
        </div>
      </form>

      <div className="mt-6 mb-4">
        <SubmitButton
          disabled={isSubmitting || !message.trim()}
          onClick={handleSubmit}
          type="button"
        >
          제출하기
        </SubmitButton>
      </div>

      {/* 테스트 버튼 */}
      <div className="mb-8">
        <button
          type="button"
          onClick={handleTestButtonClick}
          className="bg-gray-200 border-2 border-gray-300 text-gray-700 font-medium text-base py-2 px-4 rounded font-nanumSquare"
        >
          테스트 (유레카 후보 저장)
        </button>
      </div>
    </div>
  );
};

export default CheerForm;
