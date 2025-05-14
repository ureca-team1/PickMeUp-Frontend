import axios from 'axios';
import { imgMap } from '../components/approvalRating/imgMap';

const API_URL = import.meta.env.VITE_API_URL;

const CANDIDATE_INFO = {
  1: { name: '이재명', party: '더불어민주당', partyKey: 'democratic', image: '1.png' },
  2: { name: '김문수', party: '국민의힘', partyKey: 'people', image: '2.png' },
  3: { name: '이준석', party: '개혁신당', partyKey: 'reform', image: '3.png' },
  4: { name: '권영국', party: '민주노동당', partyKey: 'labor', image: '4.png' },
  5: { name: '구주와', party: '자유통일당', partyKey: 'free', image: '5.png' },
  6: { name: '황교안', party: '무소속', partyKey: 'independent', image: '6.png' },
  7: { name: '송진호', party: '무소속', partyKey: 'independent', image: '7.png' },
  8: { name: '기타', party: '', partyKey: 'primary', image: '' },
};

export const getRatings = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/api/poll-results/national`);
    const { totalRespondents, results } = data; //전체 투표자 수, 득표 수

    return results.map(({ candidate, supportCount }) => {
      const info = CANDIDATE_INFO[candidate] || {};
      const rating = +((supportCount / totalRespondents) * 100).toFixed(1);

      return {
        id: candidate,
        support: rating,
        supportCount,
        ...info,
        image: imgMap[info.image] || '',
      };
    });
  } catch (error) {
    console.error('지지율 데이터 조회 중 오류 발생:', error);
  }
};
