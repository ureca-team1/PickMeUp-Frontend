import axios from '@/utils/axiosInstance';

export const sendVote = async ({ region, candidate }) => {
  try {
    const response = await axios.post('/api/vote', {
      region,
      candidate,
    });
    return response.data;
  } catch (error) {
    console.error('투표 전송 실패:', error);
    throw new Error('투표 전송 실패');
  }
};

export const cancelVote = async ({ region, candidate }) => {
  try {
    const response = await axios.post('/api/vote/cancel', {
      region,
      candidate,
    });
    return response.data;
  } catch (error) {
    console.error('투표 취소 실패:', error);
    throw new Error('투표 취소 실패');
  }
};
