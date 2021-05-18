import axios from 'axios';
const API_END_POINT = 'http://localhost:8080/happyhouse';
export const api = {
  getBoardList: async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/board`);
      if (res.status !== 200) {
        throw new Error('서버가 이상합니다.');
      }
      return await res.data;
    } catch (error) {
      console.error(error);
    }
  },
  getBoard: async (boardId) => {
    try {
      const res = await axios.get(`${API_END_POINT}/board/${boardId}`);
      if (res.status !== 200) {
        throw new Error('서버가 이상합니다.');
      }
      return await res.data;
    } catch (error) {
      console.error(error);
    }
  },
  writeBoard: async (board) => {
    try {
      const res = await axios.post(`${API_END_POINT}/board`, board);
      if (res.status !== 200) {
        throw new Error('서버가 이상합니다.');
      }
      return await res.data;
    } catch (error) {
      console.error(error);
    }
  },
};
