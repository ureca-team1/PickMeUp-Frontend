import { getPartyColor } from '../../utils/partyColor';

const CheerItem = ({ message }) => {
  const { text, candidate } = message;
  const bgColor = getPartyColor(candidate);

  return (
    <div className={`${bgColor} rounded-2xl py-5 px-6`} style={{ minWidth: '260px' }}>
      <p className="text-xl font-nanumSquare leading-normal">{text}</p>
    </div>
  );
};

export default CheerItem;
