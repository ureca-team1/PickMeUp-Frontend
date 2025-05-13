import { getPartyColor } from '../../utils/partyColor';

const CheerItem = ({ message }) => {
  const { text, candidate } = message;
  const bgColor = getPartyColor(candidate);

  return (
    <div
      className={`${bgColor} rounded-2xl py-5 px-6 md:py-[20px] md:px-[24px]`}
      style={{ minWidth: '256px' }}
    >
      <p className="text-[14px] md:text-[24px] font-nanumSquare leading-normal text-black text-center">
        {text}
      </p>
    </div>
  );
};

export default CheerItem;
