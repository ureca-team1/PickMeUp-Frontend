// API 데이터 요청청
// import React, { useEffect, useState } from 'react';
// import { fetchRatings } from '../../apis/ratingApi';
// import BarItem from './BarItem';

// const RatingCharts = () => {
//   const [ratings, setRatings] = useState([]);

//   useEffect(() => {
//     const loadData = async () => {
//       const data = await fetchRatings();
//       setRatings(data);
//     };
//     loadData();
//   }, []);

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '40px' }}>
//       {ratings.map((candidate) => (
//         <BarItem key={candidate.id} {...candidate} />
//       ))}
//     </div>
//   );
// };

// 더미데이터로 테스트트

import React, { useEffect, useState } from 'react';
import { fetchRatings } from '../../apis/ratingApi';
import BarItem from './BarItem';
import { imgMap } from './imgMap';

// 후보자 정보 매핑
const CANDIDATE_INFO = {
  1: {
    name: '이재명',
    party: '더불어민주당',
    color: 'blue',
    image: imgMap['1.png'],
  },
  2: { name: '김문수', party: '국민의힘', color: 'red', image: imgMap['2.png'] },
  3: { name: '이준석', party: '개혁신당', color: 'orange', image: imgMap['3.png'] },
  4: { name: '권영국', party: '민주노동당', color: 'crimson', image: imgMap['4.png'] },
  5: { name: '구주와', party: '자유통일당', color: 'yellow', image: imgMap['5.png'] },
  6: { name: '황교안', party: '무소속', color: 'gray', image: imgMap['6.png'] },
  7: { name: '송진호', party: '무소속', color: 'gray', image: imgMap['7.png'] },
  8: { name: '기타', party: '', color: 'black', image: '' },
};

const RatingCharts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const { results, totalRespondents } = await fetchRatings();
        const processed = results.map(({ candidate, supportCount }) => {
          const info = CANDIDATE_INFO[candidate];
          return {
            ...info,
            percent: (supportCount / totalRespondents) * 100,
          };
        });
        setData(processed);
      } catch (err) {
        console.error('데이터 로드 실패:', err);
      }
    };

    loadData();
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
      {data.map((item, idx) => (
        <BarItem
          key={idx}
          name={item.name}
          party={item.party}
          percent={item.percent}
          image={item.image}
          color={item.color}
        />
      ))}
    </div>
  );
};

export default RatingCharts;
