import { useState, useEffect } from 'react';
import CheerForm from './CheerForm';
import CheerTitle from './CheerTitle';
import CheerList from './CheerList';
import { getCheerMessages } from '../../apis/cheerApi';

const CheerSection = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // API 연동 함수
  const fetchMessages = async () => {
    setIsLoading(true);
    try {
      const data = await getCheerMessages(); // 실제 서버에서 데이터 받아오기
      console.log('서버에서 가져온 메시지 목록:', data); // GET 결과 로그 확인
      setMessages(data);
    } catch (err) {
      setError('메시지를 불러오는데 실패했습니다.');
      console.error('Error fetching messages:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // 컴포넌트 마운트 시 메시지 로딩
  useEffect(() => {
    fetchMessages();
  }, []);

  // 새 메시지 추가 (POST 성공 시 호출됨)
  const handleAddMessage = (newMessage) => {
    setMessages((prev) => [newMessage, ...prev]);
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
