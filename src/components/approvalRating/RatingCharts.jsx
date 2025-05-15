import { getRatings } from '@/apis/ratingApi';
import { useEffect, useState } from 'react';
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

  const renderBarItems = () =>
    ratings
      .filter((candidate) => candidate.name !== '기타')
      .map((candidate) => (
        <BarItem key={candidate.id} {...candidate} color={`--color-${candidate.partyKey}`} />
      ));

  return (
    <div className="mx-auto w-full sm:w-fit">
      {/* 모바일 */}
      <div className="flex flex-col gap-3 md:hidden">{renderBarItems()}</div>
      {/* PC */}
      <div className="hidden items-end justify-center gap-4 md:flex md:gap-6">
        {renderBarItems()}
      </div>
    </div>
  );
};

export default RatingCharts;
