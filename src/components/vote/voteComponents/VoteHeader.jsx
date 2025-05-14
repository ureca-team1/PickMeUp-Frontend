import MainParagraph from '@/components/common/MainParagraph.jsx';
import MainTitle from '@/components/common/MainTitle.jsx';

const VoteHeader = () => {
  return (
    <div className="mb-7 md:mb-16">
      <MainTitle>
        나는 누구의 <br className="md:hidden" />
        공약에 공감할까?
      </MainTitle>
      <MainParagraph>
        후보들의 주요 공약을 비교해보고,
        <br className="hidden md:inline" />
        지금 내가 공감하는 정책과 가까운 후보를 선택해보세요.
      </MainParagraph>
    </div>
  );
};

export default VoteHeader;
