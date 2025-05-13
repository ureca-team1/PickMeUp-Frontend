import VoteBox from '@/assets/vote-box.json';
import Lottie from 'react-lottie';

function Intro() {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: VoteBox,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="mt-16 md:mt-24">
      <h2 className="text-center !leading-tight mb-6 md:mb-9 text-3xl md:text-6xl font-extrabold ">
        2025
        <br />
        Pick Your President
      </h2>
      <p className="text-center  md:text-2xl">
        지금 당신의 대통령에게 투표하라!
        <br />한 표가 모여 변화를 만드는 시간, <br className="md:hidden" />
        대선이 곧 시작됩니다
      </p>
      <div className="w-[196px] h-[196px] mb-5 mt-2.5 md:mt-3 mx-auto md:mb-6 md:w-[480px] md:h-[480px]">
        <Lottie options={defaultOptions} />
      </div>
      <p className="text-center md:text-2xl">
        대선 본투표일까지 <b className="font-extrabold">00일</b> 남았어요
      </p>
    </div>
  );
}

export default Intro;
