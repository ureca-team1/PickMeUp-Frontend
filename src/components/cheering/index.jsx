import { useState, useEffect } from 'react';
import CheerForm from './CheerForm';
import CheerTitle from './CheerTitle';
import CheerList from './CheerList';
import { getCheerMessages } from '../../apis/cheerApi';

const CheerSection = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMessages = async () => {
    setIsLoading(true);
    try {
      const data = await getCheerMessages();
      // console.log('서버에서 가져온 메시지 목록:', data);
      setMessages(data);
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
    setMessages((prev) => [newMessage, ...prev]);
  };

  return (
    <section className="mw-1280 max-w-4xl mx-auto px-4 py-12 flex flex-col items-center">
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
