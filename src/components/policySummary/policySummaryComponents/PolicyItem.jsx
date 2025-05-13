import React, { useState } from 'react';
import CategoryIcon from './CategoryIcon';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const PolicyItem = ({ category, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="mb-4 border-b border-black pb-2">
      <button
        onClick={toggleOpen}
        className="flex w-full items-center justify-between text-left text-lg font-semibold"
      >
        <div className="flex items-center gap-2">
          <CategoryIcon category={category} />
          <span className="text-sm md:text-xl">{category}</span>
        </div>
        <span className="text-2xl text-gray-500">
          {isOpen ? <FiChevronUp /> : <FiChevronDown />}
        </span>
      </button>

      {isOpen && (
        <div className="mt-2 border-t border-gray-300 pt-2">
          <ul className="list-inside list-disc space-y-1">
            {items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PolicyItem;

//아이콘 패키지 설치
//npm install react-icons

//공약 항목 > 드롭다운으로
