import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const fetchNationalPollResults = () => {
  return axios.get(`${API_URL}/api/poll-results/national`);
};
