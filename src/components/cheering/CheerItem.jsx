/*
단일 응원 메시지 카드 렌더링
메시지에 포함된 party 값을 통해 정당 색상을 적용

getPartyColor(party) 함수로 배경색 클래스 반환(검토필요)
글자는 한 줄로 표시되며 말줄임 없이 카드 너비가 유동적으로 확장되도록
*/
import { getPartyColor } from '../../utils/partyColor';

const CheerItem = ({ message }) => {
  const { text, party } = message;

  // 정당에 따른 배경색 가져오기
  const bgColor = getPartyColor(party);

  return (
    <div className={`${bgColor} rounded-2xl py-5 px-6`} style={{ minWidth: '260px' }}>
      <p className="text-xl font-nanumSquare leading-normal ">{text}</p>
    </div>
  );
};

export default CheerItem;
