/*
getVotedCandidate()
사용자가 투표한 후보 정보를 로컬 스토리지에서 가져오는 함수

saveVotedCandidate({ name, party })
후보자 정보(예: 유레카, 너무맛있당)를 로컬 스토리지에 저장

CheerForm 컴포넌트 내부에서 후보 정보를 표시하거나 저장할 때 사용됨
*/

/**
 * 로컬 스토리지에서 투표한 후보자 정보 가져오기
 * @returns {Object|null} 투표한 후보자 정보 객체 또는 null
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
 * @param {Object} candidateInfo - 후보자 정보 객체 (name, party)
 */
export const saveVotedCandidate = (candidateInfo) => {
  try {
    localStorage.setItem('votedCandidate', JSON.stringify(candidateInfo));
    console.log('후보자 정보가 저장되었습니다:', candidateInfo);
  } catch (error) {
    console.error('로컬 스토리지 저장 오류:', error);
  }
};

/**
 * 로컬 스토리지에서 투표한 정당 정보 가져오기 (이전 버전 호환용)
 * @returns {string|null} 투표한 정당명 또는 null
 */
export const getVotedParty = () => {
  const candidate = getVotedCandidate();
  return candidate ? candidate.party : null;
};

/**
 * 로컬 스토리지에 투표한 정당 정보 저장하기
 * @param {string} party - 정당명
 */
export const saveVotedParty = (party) => {
  try {
    localStorage.setItem('votedParty', party);
  } catch (error) {
    console.error('로컬 스토리지 저장 오류:', error);
  }
};
