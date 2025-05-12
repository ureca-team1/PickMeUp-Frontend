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

후보 이름은 getVotedCandidate()로 가져오고 candidate에 저장
메시지를 입력하고 제출 시 → onAddMessage(newMessage) 호출 → 부모(CheerSection)에서 메시지 배열 갱신
*/
import { useState, useEffect } from 'react';
import { getVotedCandidate, saveVotedCandidate } from '../../utils/localStorage';

const CheerForm = () => {
  const [message, setMessage] = useState('');
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

  // 테스트 버튼 클릭 핸들러
  const handleTestButtonClick = () => {
    // 로컬 스토리지에 "유레카" 후보 정보 저장
    saveVotedCandidate({
      name: '유레카',
      party: '너무맛있당',
    });

    // 저장 후 화면에 즉시 반영
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
          />
          <span className="absolute bottom-2 right-3 text-gray-500 text-sm font-nanumSquare">
            {charCount} / {maxLength}
          </span>
        </div>
      </form>

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
