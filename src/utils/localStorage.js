/**
 * 로컬 스토리지에서 투표한 후보자 정보 가져오기
 * @returns {Object|null} 후보자 정보 (name) 또는 null
 */
export const getVotedCandidate = () => {
  try {
    const candidateData = localStorage.getItem('votedCandidate');
    return candidateData ? JSON.parse(candidateData) : null;
  } catch (error) {
    console.error('로컬 스토리지 접근 오류:', error);
    return null;
  }
};

/**
 * 로컬 스토리지에 투표한 후보자 정보 저장하기
 * @param {Object} candidateInfo - 후보자 정보 객체 (name)
 */
export const saveVotedCandidate = (candidateInfo) => {
  try {
    localStorage.setItem('votedCandidate', JSON.stringify(candidateInfo));
    console.log('후보자 정보가 저장되었습니다:', candidateInfo);
  } catch (error) {
    console.error('로컬 스토리지 저장 오류:', error);
  }
};
