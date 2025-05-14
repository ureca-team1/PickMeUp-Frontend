import { getPartyColor } from '@/utils/partyColor';

const CheerItem = ({ message }) => {
  const { text, candidate } = message;
  const bgColor = getPartyColor(candidate);

  return (
    <div
      className={`${bgColor} min-w-[256px] rounded-lg px-2 py-3.5 md:rounded-2xl md:px-6 md:py-5`}
    >
      <p className="text-center text-sm md:text-2xl">{text}</p>
    </div>
  );
};

export default CheerItem;
