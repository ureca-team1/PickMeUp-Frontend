import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

// 응원 메시지 목록을 가져오는 함수 (GET)
export const getCheerMessages = async (page = 1, size = 6) => {
  try {
    const { data } = await axios.get(`${API_URL}/api/comments`, {
      params: { page, size },
    });

    return {
      messages: data.comments.map((comment, index) => ({
        id: `${comment.candidate}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}-${index}`,
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

//새로운 응원 메시지를 서버에 전송하는 함수 (POST)
export const postCheerMessage = async (messageData) => {
  try {
    await axios.post(`${API_URL}/api/comments`, messageData);
    return { success: true };
  } catch (error) {
    console.error('응원 메시지 전송 중 오류 발생:', error);
    throw error;
  }
};
