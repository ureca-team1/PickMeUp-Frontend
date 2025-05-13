export const getVotedCandidate = () => {
  try {
    const voteInfo = localStorage.getItem('voteInfo');
    if (!voteInfo) return null;
    const parsed = JSON.parse(voteInfo);
    return parsed.candidate || null;
  } catch (error) {
    console.error('로컬 스토리지 접근 오류:', error);
    return null;
  }
};
