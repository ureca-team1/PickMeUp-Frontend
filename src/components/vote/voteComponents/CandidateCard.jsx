import unvoted from '../images/unvoted.png';
import voted from '../images/voted.png';

const CandidateCard = ({ image, name, party, slogan, selected, onClick }) => {
  return (
    <div
      className="flex w-full items-center justify-between gap-4 rounded-2xl border-3 px-3.5 py-3 md:gap-6 md:rounded-[18px] md:border-4 md:px-5 md:py-4"
      onClick={onClick}
    >
      {/* 후보 이미지 */}
      <img
        src={image}
        alt={name}
        className="h-[50px] w-[50px] rounded-full object-cover md:h-20 md:w-20"
      />
      {/* 이름, 정당, 슬로건 */}
      <div className="flex-1">
        <p className="mb-0.5 flex items-center gap-1.5 md:mb-1 md:gap-2">
          <span className="text-primary text-sm font-bold md:text-xl dark:text-white">{name}</span>
          <span className="text-xs font-normal text-[#595959] md:text-lg dark:text-gray-300">
            {party}
          </span>
        </p>
        <p className="text-sm md:text-2xl dark:text-white">“{slogan}”</p>
      </div>
      {/* 선택 상태 아이콘 */}
      <img src={selected ? voted : unvoted} alt="투표 상태" className="h-8 w-8 md:h-12 md:w-12" />
    </div>
  );
};

export default CandidateCard;
