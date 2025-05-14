export const getVotedCandidate = () => {
  try {
    const voteInfo = localStorage.getItem('voteinfo');
    if (!voteInfo) return null;
    const parsed = JSON.parse(voteInfo);
    return parsed.candidateId || null;
  } catch (error) {
    console.error('로컬 스토리지 접근 오류:', error);
    return null;
  }
};

export const saveVotedCandidate = (candidateId, regionId) => {
  try {
    const voteInfo = JSON.stringify({
      regionId,
      candidateId,
    });
    localStorage.setItem('voteinfo', voteInfo);
    console.log('voteinfo 저장됨:', voteInfo);
  } catch (error) {
    console.error('로컬 스토리지 저장 오류:', error);
  }
};
