import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

/**
 * 응원 메시지 목록을 가져오는 함수 (GET)
 */
export const getCheerMessages = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/api/comments`);

    return data.comments.map((comment) => ({
      id: `${comment.candidate}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      text: comment.content,
      candidate: comment.candidate,
      createdAt: new Date().toISOString(),
    }));
  } catch (error) {
    console.error('응원 메시지 조회 중 오류 발생:', error);
    throw error;
  }
};

/**
 * 새로운 응원 메시지를 서버에 전송하는 함수 (POST)
 */
export const postCheerMessage = async (messageData) => {
  try {
    await axios.post(`${API_URL}/api/comments`, messageData);
    return { success: true };
  } catch (error) {
    console.error('응원 메시지 전송 중 오류 발생:', error);
    throw error;
  }
};
