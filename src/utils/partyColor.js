// 정당별 색상 정보
const PARTY_COLORS = {
  더불어민주당: 'bg-[#002BFF]/50',
  국민의힘: 'bg-[#E61E2B]/50',
  개혁신당: 'bg-[#FF7210]/50',
  진보당: 'bg-[#D6001C]/50',
  민주노동당: 'bg-[#FFED00]/50',
  무소속: 'bg-[#808080]/50',
};

/**
 * 정당명에 따른 배경색 클래스명 반환
 * @param {string} party - 정당명
 * @returns {string} Tailwind 배경색 클래스
 */
export const getPartyColor = (party) => {
  return PARTY_COLORS[party] || PARTY_COLORS['무소속'];
};
