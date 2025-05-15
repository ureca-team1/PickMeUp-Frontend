import PolicyItem from './PolicyItem';

const PolicyList = ({ policies }) => {
  return (
    <div className="mt-8 flex flex-col gap-6 overflow-x-hidden md:mt-10 md:gap-8">
      {policies.map((policy) => (
        <PolicyItem key={policy.category} category={policy.category} items={policy.items} />
      ))}
    </div>
  );
};

export default PolicyList;

// 공약 카테고리 >> 드랍다운 클릭 시 PolicyItem 보여줌
