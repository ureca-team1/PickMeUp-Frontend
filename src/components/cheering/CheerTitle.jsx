import MainParagraph from '../common/MainParagraph.jsx';
import MainTitle from '../common/MainTitle.jsx';

const CheerTitle = () => {
  return (
    <div className="mb-7 text-center md:mb-10">
      <MainTitle>응원 한마디</MainTitle>
      <MainParagraph>
        투표한 후보에게 응원 한마디 남겨주세요
        <br />
        그들의 길에, 당신의 응원을 보태보세요
      </MainParagraph>
    </div>
  );
};

export default CheerTitle;
