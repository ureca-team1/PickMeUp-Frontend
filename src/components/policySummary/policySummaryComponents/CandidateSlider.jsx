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
      <div className="w-[500px]">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          navigation
          pagination={{ clickable: true }}
          
          spaceBetween={30}
          slidesPerView={1} // 한 번에 한 슬라이드씩 > 2개로 하면 넘겨도 옆에 보이는게 싫음
        >
          {/* 생년월일 슬라이드 */}
          <SwiperSlide key="birth">
            <div className="text-center py-6">{candidate.info.birth}</div>
          </SwiperSlide>

          {/* 이력 슬라이드: 2개씩 세로로 보여줌 */}
          {chunkedHistories.map((historyPair, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col gap-6 items-center justify-center h-full py-6">
                {historyPair.map((item, idx) => (
                  <div key={idx} className="text-center">
                    {item}
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CandidateSlider;

// swiper 라이브러리 사용   npm i swiper


