import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

// 투표 요청
export const sendVote = async ({ region, candidate }) => {
  try {
    const response = await axios.post(`${API_URL}/api/vote`, {
      region,
      candidate,
    });
    return response.data;
  } catch (error) {
    console.error('투표 전송 실패:', error);
    throw new Error('투표 전송 실패');
  }
};

// 투표 취소 요청
export const cancelVote = async ({ region, candidate }) => {
  try {
    const response = await axios.post(`${API_URL}/api/vote/cancel`, {
      region,
      candidate,
    });
    return response.data;
  } catch (error) {
    console.error(' 투표 취소 실패:', error);
    throw new Error('투표 취소 실패');
  }
};
