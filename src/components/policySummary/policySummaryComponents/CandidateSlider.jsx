import React from 'react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CandidateSlider = ({ candidate }) => {
  const histories = candidate?.info?.history || [];

  // 2개씩 묶기
  const chunkedHistories = [];
  for (let i = 0; i < histories.length; i += 2) {
    chunkedHistories.push(histories.slice(i, i + 2));
  }

  const slideBaseClass =
    'flex h-[120px] items-center justify-center text-center text-[16px] md:text-[18px]';

  return (
    <div className="flex items-center justify-center gap-4">
      <div className="w-[300px] md:w-[500px] h-[120px]">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
        >
          {/* 생년월일 슬라이드 */}
          <SwiperSlide key="birth">
            <div className={slideBaseClass}>{candidate.info.birth}</div>
          </SwiperSlide>

          {/* 이력 슬라이드 */}
          {chunkedHistories.map((historyPair, index) => (
            <SwiperSlide key={index}>
              <div className={`${slideBaseClass} flex-col `}>
                {historyPair.map((item, idx) => (
                  <div key={idx}>{item}</div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style>
          {`
            .swiper-button-prev,
            .swiper-button-next {
              color: #9ca3af;
            }

            .swiper-button-prev::after,
            .swiper-button-next::after {
              font-size: 16px !important;
              font-weight: 700 !important;
            }

            .swiper-pagination-bullet {
              background-color: #d1d5db;
              opacity: 1;
            }

            .swiper-pagination-bullet-active {
              background-color: #6b7280;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default CandidateSlider;


// swiper 라이브러리 사용   npm i swiper
