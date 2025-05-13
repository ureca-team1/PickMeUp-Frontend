import { getPartyColor } from '../../utils/partyColor';

const CheerItem = ({ message }) => {
  const { text, candidate } = message;
  const bgColor = getPartyColor(candidate);

  return (
    <div
      className={`${bgColor} rounded-2xl px-6 py-5 md:px-[24px] md:py-[20px]`}
      style={{ minWidth: '256px' }}
    >
      <p className="font-nanumSquare text-center text-[14px] leading-normal text-black md:text-[24px]">
        {text}
      </p>
    </div>
  );
};

export default CheerItem;
