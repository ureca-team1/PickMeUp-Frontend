import { useState, useEffect } from 'react';
import { getVotedCandidate, saveVotedCandidate } from '../../utils/localStorage';
import { candidateNameMap } from '../../utils/candidateMap';
import { postCheerMessage } from '../../apis/cheerApi';
import SubmitButton from '../common/Button';

const CheerForm = ({ onAddMessage }) => {
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [candidateId, setCandidateId] = useState(null);
  const maxLength = 30;

  const loadCandidateInfo = () => {
    const id = getVotedCandidate();
    setCandidateId(id);
  };

  useEffect(() => {
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
    if (!message.trim() || !candidateId) return;
    setIsSubmitting(true);

    try {
      const newMessage = {
        candidate: candidateId,
        content: message,
      };

      // console.log('전송할 응원 메시지:', newMessage);
      await postCheerMessage(newMessage);
      // console.log('메시지 전송 완료');

      const formattedMessage = {
        ...newMessage,
        id: Date.now(),
        text: message,
        createdAt: new Date().toISOString(),
      };
      onAddMessage(formattedMessage);
      setMessage('');
      setCharCount(0);
    } catch (err) {
      console.error('메시지 전송 실패:', err);
      alert('전송 오류. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  //todo: 삭제
  const handleTestButtonClick = () => {
    saveVotedCandidate(1, 4); // candidateId: 1, regionId: 4
    loadCandidateInfo();
  };

  return (
    <div className="flex flex-col items-center w-full">
      <form className="w-[319px] md:w-[865px] border-3 border-[#292B2E] rounded-2xl p-6 relative">
        <div className="mb-4 font-nanumSquare text-[16px] md:text-[24px] text-black">
          {candidateId ? (
            <>
              <span className="font-extrabold underline">{candidateNameMap[candidateId]}</span>{' '}
              후보님께
            </>
          ) : (
            '후보님께'
          )}
        </div>

        <div className="relative">
          <textarea
            value={message}
            onChange={handleMessageChange}
            placeholder={
              candidateId ? '응원을 남겨주세요' : '투표 후 나의 후보에게 응원을 남겨주세요'
            }
            className="w-full p-4 md:p-5 bg-[#f5f5f5]/60 rounded-xl h-24 resize-none focus:outline-none font-nanumSquare text-[14px] md:text-[24px] placeholder:text-[#808080]"
            disabled={isSubmitting || !candidateId}
          />
          <span className="absolute bottom-2 right-3 text-[10px] md:text-[16px] text-[#808080] font-nanumSquare">
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

      {/* todo: 삭제 */}
      <div className="mb-8">
        <button
          type="button"
          onClick={handleTestButtonClick}
          className="bg-gray-200 border-2 border-gray-300 text-gray-700 font-medium text-base py-2 px-4 rounded font-nanumSquare hover:cursor-pointer"
        >
          테스트 (이재명 후보 저장)
        </button>
      </div>
    </div>
  );
};

export default CheerForm;
