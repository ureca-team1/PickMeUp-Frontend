import { getCheerMessages } from '@/apis/cheerApi';
import { useEffect, useState } from 'react';
import CheerForm from './CheerForm';
import CheerList from './CheerList';
import CheerTitle from './CheerTitle';

const CheerSection = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMessages = async () => {
    setIsLoading(true);
    try {
      const data = await getCheerMessages();
      setMessages(data.messages);
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
    <div className="mw-1280 !mb-[72px] flex flex-col items-center md:!mb-52">
      <CheerTitle />
      <CheerForm onAddMessage={handleAddMessage} />

      {isLoading ? (
        <p className="mt-8 text-center">메시지를 불러오는 중...</p>
      ) : error ? (
        <p className="mt-8 text-center text-red-500">{error}</p>
      ) : (
        <CheerList messages={messages} />
      )}
    </div>
  );
};

export default CheerSection;
