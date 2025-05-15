import axios from '@/utils/axiosInstance';

export const fetchNationalPollResults = () => {
  return axios.get('/api/poll-results/national');
};
