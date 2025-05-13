export const getVotedCandidate = () => {
  try {
    const id = localStorage.getItem('votedCandidateId');
    return id ? parseInt(id, 10) : null;
  } catch (error) {
    console.error('로컬 스토리지 접근 오류:', error);
    return null;
  }
};

export const saveVotedCandidate = (id) => {
  try {
    localStorage.setItem('votedCandidateId', id.toString());
    console.log('후보 ID 저장됨:', id);
  } catch (error) {
    console.error('로컬 스토리지 저장 오류:', error);
  }
};
