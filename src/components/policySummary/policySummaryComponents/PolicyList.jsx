import React from 'react';
import PolicyItem from './PolicyItem';

const PolicyList = ({ policies }) => {
  return (
    <div className="mx-auto mt-6 w-full max-w-xl text-left text-sm md:text-lg">
      {policies.map((policy) => (
        <PolicyItem key={policy.category} category={policy.category} items={policy.items} />
      ))}
    </div>
  );
};

export default PolicyList;

// 공약 카테고리 >> 드랍다운 클릭 시 PolicyItem 보여줌
