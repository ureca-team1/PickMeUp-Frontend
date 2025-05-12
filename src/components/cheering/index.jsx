/*
응원 한마디 전체 섹션을 담당하는 최상위 컴포넌트
응원 메시지 목록을 관리하고 하위 컴포넌트(Form, List)에 전달
*/

import { useState, useEffect } from 'react';
import CheerForm from './CheerForm';
import CheerTitle from './CheerTitle';
import CheerList from './CheerList';
import { mockCheerMessages } from '../../mock/cheerMessages';

const CheerSection = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // API 연동 시 사용할 함수
  const fetchMessages = async () => {
    setIsLoading(true);
    try {
      // 실제 API 연동 시 아래 주석을 해제하고 목업 데이터 사용 부분을 주석 처리
      // const data = await getCheerMessages();
      // setMessages(data);

      // 목업 데이터 사용 (API 연동 전)
      setMessages(mockCheerMessages);
    } catch (err) {
      setError('메시지를 불러오는데 실패했습니다.');
      console.error('Error fetching messages:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleAddMessage = (newMessage) => {
    // 새 메시지를 목록 맨 앞에 추가
    setMessages([newMessage, ...messages]);
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-12 flex flex-col items-center">
      <CheerTitle />
      <CheerForm onAddMessage={handleAddMessage} />

      {isLoading ? (
        <p className="text-center mt-8">메시지를 불러오는 중...</p>
      ) : error ? (
        <p className="text-center mt-8 text-red-500">{error}</p>
      ) : (
        <CheerList messages={messages} />
      )}
    </section>
  );
};

export default CheerSection;
