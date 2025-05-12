/*
응원 한마디 전체 섹션을 담당하는 최상위 컴포넌트
응원 메시지 목록을 관리하고 하위 컴포넌트(Form, List)에 전달
*/

import CheerTitle from './CheerTitle';

const CheerSection = () => {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-12 flex flex-col items-center">
      <CheerTitle />
    </section>
  );
};

export default CheerSection;
