import { A11y, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import '@/styles/policy.css';

const CandidateSlider = ({ candidate }) => {
  const histories = candidate?.info?.history || [];

  // 2개씩 묶기
  const chunkedHistories = [];
  for (let i = 0; i < histories.length; i += 2) {
    chunkedHistories.push(histories.slice(i, i + 2));
  }

  const slideBaseClass =
    'flex items-center cursor-pointer min-h-12 md:min-h-[62px] text-sm flex-col justify-center md:text-lg';

  return (
    <div className="mx-auto w-[320px] md:w-[462px]">
      <Swiper
        className="policy-swiper"
        modules={[Navigation, Pagination, A11y]}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1}
      >
        {/* 생년월일 슬라이드 */}
        <SwiperSlide key="birth">
          <div className={slideBaseClass}>{candidate.info.birth}</div>
        </SwiperSlide>

        {/* 이력 슬라이드 */}
        {chunkedHistories.map((historyPair, index) => (
          <SwiperSlide key={index}>
            <div className={slideBaseClass}>
              {historyPair.map((item, idx) => (
                <div key={idx}>{item}</div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CandidateSlider;

// swiper 라이브러리 사용   npm i swiper
