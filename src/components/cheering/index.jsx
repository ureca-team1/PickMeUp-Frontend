import { useState } from 'react';
import CheerForm from './CheerForm';
import CheerList from './CheerList';
import CheerTitle from './CheerTitle';

const CheerSection = () => {
  const [messages, setMessages] = useState([]);

  const handleAddMessage = (newMessage) => {
    setMessages((prev) => [newMessage, ...prev]);
  };

  return (
    <div className="mw-1280 !mb-[72px] flex flex-col items-center md:!mb-52">
      <CheerTitle />
      <CheerForm onAddMessage={handleAddMessage} />
      <CheerList messages={messages} setMessages={setMessages} />
    </div>
  );
};

export default CheerSection;
