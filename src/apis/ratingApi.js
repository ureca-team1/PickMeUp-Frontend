export const fetchRatings = async () => {
  // 실제 API 호출 대신 더미 데이터 반환
  return {
    totalRespondents: 1005,
    results: [
      { candidate: '1', supportCount: 511 },
      { candidate: '2', supportCount: 207 },
      { candidate: '3', supportCount: 127 },
      { candidate: '4', supportCount: 0 },
      { candidate: '5', supportCount: 0 },
      { candidate: '6', supportCount: 1 },
      { candidate: '7', supportCount: 3 },
      { candidate: '8', supportCount: 156 },
    ],
  };
};
