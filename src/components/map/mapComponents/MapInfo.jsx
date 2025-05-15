import React from 'react';
import Button from '@/components/common/Button';
import animationData from '@/assets/map-animation.json';
import Lottie from 'react-lottie';

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
    <form className="mb-20 flex w-[319px] flex-col rounded-2xl border-[#292B2E] p-6 md:w-[865px] md:flex-row md:justify-between md:border-3">
      {/* 애니메이션 영역 */}
      <section className="mb-6 flex-shrink-0 md:mr-6 md:mb-0">
        <Lottie options={defaultOptions} height={300} width={300} />
      </section>

      {/* 설명 및 버튼 영역 */}
      <section className="flex flex-col justify-between text-left">
        <div className="mb-5">
          <p className="mb-3 text-[18px] leading-[20px] font-extrabold md:text-[20px]">
            사전 투표(5월 29일~5월 30일)
          </p>
          <div className="text-[16px] leading-[22px] font-normal">
            <p>선거일 전에 미리 투표하는 것을 말해요.</p>
            <p>전국 사전 투표소 아무 데서나 투표할 수 있어요.</p>
          </div>
        </div>

        <div className="mb-5">
          <p className="mb-3 text-[18px] leading-[20px] font-extrabold md:text-[20px]">
            본투표 (6월 3일)
          </p>
          <div className="text-[16px] leading-[22px] font-normal">
            <p>선거일 전에 미리 투표하는 것을 말해요.</p>
            <p>내가 투표할 수 있는 투표소가 정해져있어요.</p>
            <p>
              오전 6시부터 오후 6시까지 신분증(주민등록증, 운전면허증, 복지카드, 여권 등) 을 들고
              투표소에 가면 돼요.
            </p>
          </div>
        </div>

        <div className="mt-4 flex justify-between md:justify-start md:gap-4">
          <Button
            size="custom"
            onClick={() => window.open('https://map.naver.com/p/search/사전%20투표소', '_blank')}
          >
            사전 투표소 찾기
          </Button>

          <Button
            size="custom"
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
