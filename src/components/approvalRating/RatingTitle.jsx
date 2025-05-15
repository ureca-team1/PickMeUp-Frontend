import MainParagraph from '../common/MainParagraph';
import MainTitle from '../common/MainTitle';

const RatingTitle = () => {
  return (
    <div className="mb-7 text-center md:mb-14">
      <MainTitle>실시간 지지율</MainTitle>
      <MainParagraph>
        다른 사람들은 누구에게 투표중인지
        <br /> 실시간으로 확인해보세요
      </MainParagraph>
    </div>
  );
};

export default RatingTitle;
