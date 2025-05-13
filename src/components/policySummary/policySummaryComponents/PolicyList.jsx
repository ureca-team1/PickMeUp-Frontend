import React from 'react';
import PolicyItem from './PolicyItem';

const PolicyList = ({ policies }) => {
  return (
    <div className="w-full max-w-xl mx-auto text-left mt-6">
      {policies.map((policy) => (
        <PolicyItem
          key={policy.category}
          category={policy.category}
          items={policy.items}
        />
      ))}
    </div>
  );
};

export default PolicyList;





// 공약 카테고리 >> 드랍다운 클릭 시 PolicyItem 보여줌