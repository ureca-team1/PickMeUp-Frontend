import React, { useEffect, useState } from 'react';
import { getRatings } from '../../apis/ratingApi';
import BarItem from './BarItem';

const RatingCharts = () => {
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getRatings();
        setRatings(data);
      } catch (err) {
        console.error('getRatings API 호출 실패: ', err);
      }
    };
    loadData();
  }, []);

  return (
    <div className="w-full">
      {/* 모바일 */}
      <div className="flex flex-col gap-2 md:hidden">
        {ratings.map((candidate) => (
          <BarItem key={candidate.id} {...candidate} color={`--color-${candidate.partyKey}`} />
        ))}
      </div>

      {/* PC */}
      <div className="hidden items-end justify-center gap-4 md:flex">
        {ratings.map((candidate) => (
          <BarItem key={candidate.id} {...candidate} color={`--color-${candidate.partyKey}`} />
        ))}
      </div>
    </div>
  );
};

export default RatingCharts;
