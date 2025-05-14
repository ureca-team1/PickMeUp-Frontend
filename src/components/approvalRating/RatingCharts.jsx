// API 데이터 요청
import React, { useEffect, useState } from 'react';
import { getRatings } from '../../apis/ratingApi';
import BarItem from './BarItem';

const RatingCharts = () => {
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getRatings();
        //console.log('getRatings 응답 확인: ', data);
        setRatings(data);
      } catch (err) {
        console.error('getRatings API 호출 실패: ', err);
      }
    };
    loadData();
  }, []);

  return (
    <div className="mt-10 flex items-end justify-center gap-5">
      {ratings.map((candidate) => (
        <BarItem key={candidate.id} {...candidate} color={`--color-${candidate.partyKey}`} />
      ))}
    </div>
  );
};

export default RatingCharts;
