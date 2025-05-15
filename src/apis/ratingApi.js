import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

//각 후보별 정보 매핑
const CANDIDATE_INFO = {
  1: {
    name: '이재명',
    party: '더불어민주당',
    partyKey: 'democratic',
    image: '/candidates/이재명.png',
  },
  2: { name: '김문수', party: '국민의힘', partyKey: 'people', image: '/candidates/김문수.png' },
  3: { name: '이준석', party: '개혁신당', partyKey: 'reform', image: '/candidates/이준석.png' },
  4: { name: '권영국', party: '민주노동당', partyKey: 'labor', image: '/candidates/권영국.png' },
  5: { name: '구주와', party: '자유통일당', partyKey: 'free', image: '/candidates/구주와.png' },
  6: { name: '황교안', party: '무소속', partyKey: 'independent', image: '/candidates/황교안.png' },
  7: { name: '송진호', party: '무소속', partyKey: 'independent', image: '/candidates/송진호.png' },
  8: { name: '기타', party: '', partyKey: 'primary', image: '' },
};

//전체 지지율 가져오는 함수
export const getRatings = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/api/poll-results/national`);
    const { totalRespondents, results } = data;
    const maxSupport = Math.max(...results.map((sup) => sup.supportCount));

    return results.map(({ candidate, supportCount }) => {
      const info = CANDIDATE_INFO[candidate] || {};
      const normalized = +((supportCount / maxSupport) * 100).toFixed(1); //정규화
      const realPercent = +((supportCount / totalRespondents) * 100).toFixed(1); //실제 지지율

      return {
        id: candidate,
        supportCount,
        height: normalized, // 막대 그래프 정규화 높이
        percent: realPercent, // 실제 지지율 퍼센트
        ...info,
      };
    });
  } catch (error) {
    console.error('지지율 데이터 조회 중 오류 발생:', error);
    throw error;
  }
};
