import { useState, useEffect } from 'react';
import { getVotedCandidate } from '../../utils/localStorage';
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

      await postCheerMessage(newMessage);

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

  return (
    <div className="flex w-full flex-col items-center">
      <form className="relative w-[319px] rounded-2xl border-3 border-[#292B2E] p-6 md:w-[865px]">
        <div className="font-nanumSquare mb-4 text-[16px] text-black md:text-[24px]">
          {candidateId ? (
            <>
              <span className="border-b-2 border-black pb-[0.1px] font-extrabold">
                {candidateNameMap[candidateId]}
              </span>{' '}
              후보님께
            </>
          ) : (
            '나의 후보님께'
          )}
        </div>

        <div className="relative">
          <textarea
            value={message}
            onChange={handleMessageChange}
            placeholder={
              candidateId ? '응원을 남겨주세요' : '투표 후 나의 후보에게 응원을 남겨주세요'
            }
            className="font-nanumSquare h-24 w-full resize-none rounded-xl bg-[#f5f5f5]/60 p-4 text-[13px] placeholder:text-[13px] placeholder:text-[#808080] focus:outline-none md:p-5 md:text-[24px] md:placeholder:text-[24px]"
            disabled={isSubmitting || !candidateId}
          />
          <span className="font-nanumSquare absolute right-3 bottom-2 text-[10px] text-[#808080] md:text-[16px]">
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
    </div>
  );
};

export default CheerForm;
