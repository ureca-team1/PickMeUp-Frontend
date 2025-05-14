import { postCheerMessage } from '@/apis/cheerApi';
import { candidateNameMap } from '@/utils/candidateMap';
import { useEffect, useState } from 'react';
import SubmitButton from '../common/Button';

const CheerForm = ({ onAddMessage }) => {
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [candidateId, setCandidateId] = useState(null);
  const maxLength = 30;

  const handleMessageChange = (e) => {
    const text = e.target.value;
    if (text.length <= maxLength) {
      setMessage(text);
      setCharCount(text.length);
    }
  };

  useEffect(() => {
    const handleVoteChange = (e) => {
      const newId = e.detail?.candidateId || null;
      setCandidateId(newId);
    };

    window.addEventListener('vote:change', handleVoteChange);

    return () => {
      window.removeEventListener('vote:change', handleVoteChange);
    };
  }, []);

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
    <div className="mb-12 flex w-full flex-col items-center md:mb-16">
      <form className="border-primary mx-auto w-full max-w-[865px] rounded-lg border-3 px-5 py-4 md:w-[865px] md:rounded-2xl md:px-7 md:py-5">
        <div className="mb-4 md:mb-5 md:text-2xl">
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

        <div className="bg-secondary rounded-lg pb-3.5 text-right md:rounded-2xl md:pb-5">
          <textarea
            value={message}
            onChange={handleMessageChange}
            placeholder={
              candidateId ? '응원을 남겨주세요' : '투표 후 나의 후보에게 응원을 남겨주세요'
            }
            className="placeholder:text-independent dark:placeholder:text-independent h-[4.25rem] w-full resize-none p-3.5 text-sm placeholder:text-sm focus:outline-none md:h-[4.75rem] md:max-h-none md:p-5 md:text-2xl md:placeholder:text-2xl"
            disabled={isSubmitting || !candidateId}
          />
          <span className="text-independent px-3.5 text-[0.625rem] md:px-5 md:text-base dark:text-white/70">
            {charCount} / {maxLength}
          </span>
        </div>
      </form>

      <SubmitButton
        className="mt-5 md:mt-9"
        disabled={isSubmitting || !message.trim()}
        onClick={handleSubmit}
        type="button"
      >
        제출하기
      </SubmitButton>
    </div>
  );
};

export default CheerForm;
