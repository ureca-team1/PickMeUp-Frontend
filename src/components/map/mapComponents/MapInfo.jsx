import animationData from '@/assets/map-animation.json';
import Button from '@/components/common/Button';
import Lottie from 'react-lottie';

const Title = ({ children }) => {
  return <h4 className="mb-3.5 text-xl font-extrabold md:mb-4">{children}</h4>;
};

const Description = ({ children }) => {
  return <p className="md:text-lg">{children}</p>;
};

const MapInfo = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <form className="border-primary mb-9 flex w-full max-w-[940px] flex-col rounded-2xl md:mb-11 md:flex-row md:items-center md:justify-center md:border-3 md:px-4 md:py-6 dark:border-white">
      {/* 애니메이션 영역 */}
      <section className="md:shrink-0">
        <Lottie options={defaultOptions} height={300} width={300} />
      </section>

      {/* 설명 및 버튼 영역 */}
      <section className="flex flex-col gap-5">
        <div>
          <Title>사전 투표(5월 29일~5월 30일)</Title>
          <Description>
            선거일 전에 미리 투표하는 것을 말해요.
            <br />
            전국 사전 투표소 아무 데서나 투표할 수 있어요.
          </Description>
        </div>

        <div>
          <Title> 본투표 (6월 3일)</Title>
          <div className="flex flex-col gap-1">
            <Description>
              선거일 전에 미리 투표하는 것을 말해요.
              <br />
              내가 투표할 수 있는 투표소가 정해져있어요.
            </Description>
            <Description>
              오전 6시부터 오후 6시까지 신분증(주민등록증, 운전면허증, 복지카드, 여권 등){' '}
              <br className="hidden md:block" />을 들고 투표소에 가면 돼요.
            </Description>
          </div>
        </div>

        <div className="flex items-stretch gap-4 md:gap-6">
          <Button
            type="button"
            className="flex-1 md:max-w-[14rem] md:py-3.5! md:text-xl"
            onClick={() => window.open('https://map.naver.com/p/search/사전%20투표소', '_blank')}
          >
            사전 투표소 찾기
          </Button>
          <Button
            type="button"
            className="flex-1 md:max-w-[14rem] md:py-3.5! md:text-xl"
            onClick={() => window.open('https://map.naver.com/p/search/사전%20투표소', '_blank')}
          >
            본 투표소 찾기
          </Button>
        </div>
      </section>
    </form>
  );
};

export default MapInfo;
