export const getVoteInfo = () => {
  try {
    const voteInfo = localStorage.getItem('voteinfo');
    return voteInfo ? JSON.parse(voteInfo) : null;
  } catch (error) {
    console.error('voteinfo 파싱 오류:', error);
    return null;
  }
};

export const saveVoteInfo = (candidateId, regionId) => {
  try {
    const voteInfo = JSON.stringify({ candidateId, regionId });
    localStorage.setItem('voteinfo', voteInfo);
  } catch (error) {
    console.error('voteinfo 저장 오류:', error);
  }
};

export const removeVoteInfo = () => {
  try {
    localStorage.removeItem('voteinfo');
  } catch (error) {
    console.error('voteinfo 삭제 오류:', error);
  }
};
