import axios from '@/utils/axiosInstance';
import { v4 as uuidv4 } from 'uuid';

export const getCheerMessages = async (page = 1, size = 6) => {
  try {
    const { data } = await axios.get('/api/comments', {
      params: { page, size },
    });

    return {
      messages: data.comments.map((comment, index) => ({
        id: `${comment.candidate}-${Date.now()}-${uuidv4()}-${index}`,
        text: comment.content,
        candidate: comment.candidate,
        createdAt: new Date().toISOString(),
      })),
      totalPages: data.totalPages,
      currentPage: data.currentPage,
    };
  } catch (error) {
    console.error('응원 메시지 조회 중 오류 발생:', error);
    throw error;
  }
};

export const postCheerMessage = async (messageData) => {
  try {
    await axios.post('/api/comments', messageData);
    return { success: true };
  } catch (error) {
    console.error('응원 메시지 전송 중 오류 발생:', error);
    throw error;
  }
};
