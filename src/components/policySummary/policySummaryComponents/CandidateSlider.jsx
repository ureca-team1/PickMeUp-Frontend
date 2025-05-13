import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const CandidateSlider = ({ candidate }) => {
  const histories = candidate?.info?.history || [];

  // 2개씩 묶기
  const chunkedHistories = [];
  for (let i = 0; i < histories.length; i += 2) {
    chunkedHistories.push(histories.slice(i, i + 2));
  }

  return (
    <div className="flex items-center justify-center gap-4">
      <div className="w-[300px] md:w-[500px]">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1} // 한 번에 한 슬라이드씩 > 2개로 하면 넘겨도 옆에 보이는게 싫음
        >
          {/* 생년월일 슬라이드 */}
          <SwiperSlide key="birth">
            <div className="text-center py-6 text-sm md:text-xl">{candidate.info.birth}</div>
          </SwiperSlide>

          {/* 이력 슬라이드: 2개씩 세로로 보여줌 */}
          {chunkedHistories.map((historyPair, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col gap-2 items-center justify-center h-full py-6 text-sm  md:text-xl">
                {historyPair.map((item, idx) => (
                  <div key={idx} className="text-center">
                    {item}
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* DOM 요소들에는 Tailwind 클래스명을 직접 적용할 수 없음 */}
        <style>
          {`
            .swiper-button-prev,
            .swiper-button-next {
              color: #9ca3af; /* Tailwind의 gray-400 */
            }
              
            .swiper-button-prev::after,
            .swiper-button-next::after {
              font-size: 16px !important; /* 아이콘 크기 확실히 줄임 */
              font-weight: 700 !important; /* 두께를 키움 (700은 굵은 두께) */

            }

            .swiper-pagination-bullet {
              background-color: #d1d5db; /* Tailwind의 gray-300 */
              opacity: 1;
            }

            .swiper-pagination-bullet-active {
              background-color: #6b7280; /* Tailwind의 gray-500 */
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default CandidateSlider;

// swiper 라이브러리 사용   npm i swiper
