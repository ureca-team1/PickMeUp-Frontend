import { useEffect, useRef } from 'react';
import CheerItem from './CheerItem';
import { v4 as uuidv4 } from 'uuid';
import { getCheerMessages } from '@/apis/cheerApi';

const CheerList = ({ messages, setMessages }) => {
  const page = useRef(1);
  const loadedPages = useRef(new Set());
  const messageHash = useRef(new Set());
  const hasMore = useRef(true);
  const isLoading = useRef(false);

  const fetchMessages = async (pageNum) => {
    if (loadedPages.current.has(pageNum) || isLoading.current) return;
    isLoading.current = true;

    try {
      const data = await getCheerMessages(pageNum, 6);

      const filtered = data.messages.filter((msg) => {
        const hash = `${msg.candidate}-${msg.text}-${msg.createdAt}`;
        if (messageHash.current.has(hash)) return false;
        messageHash.current.add(hash);
        return true;
      });

      const newMessages = filtered.map((msg) => ({
        ...msg,
        uid: msg.uid || uuidv4(),
      }));

      setMessages((prev) => [...prev, ...newMessages]);
      hasMore.current = data.currentPage < data.totalPages;
      loadedPages.current.add(pageNum);
    } catch (error) {
      console.error('응원 메시지 불러오기 실패:', error);
    } finally {
      isLoading.current = false;
    }
  };

  useEffect(() => {
    fetchMessages(page.current);
  }, []);

  if (!messages || messages.length === 0) {
    return (
      <div className="text-center text-gray-500">
        아직 제출된 메시지가 없어요. 응원 메시지를 입력하고 첫 번째 응원의 주인공이 되어보세요!
      </div>
    );
  }

  return (
    <div className="relative w-full">
      <div className="flex flex-col flex-wrap items-center justify-center gap-4 md:flex-row">
        {messages.map((message) => (
          <CheerItem key={message.uid} message={message} />
        ))}
      </div>

      {hasMore.current && !isLoading.current && (
        <div
          className="mt-5 flex cursor-pointer flex-col items-center gap-3 md:mt-8"
          onClick={() => {
            page.current += 1;
            fetchMessages(page.current);
          }}
        >
          {[...Array(3)].map((_, i) => (
            <div
              key={`dots-${i}`}
              className="h-[5px] w-[5px] rounded-full bg-[#B7B7B7] md:h-[10px] md:w-[10px]"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CheerList;
