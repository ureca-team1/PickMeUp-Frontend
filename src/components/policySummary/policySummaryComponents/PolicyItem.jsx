import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import CategoryIcon from './CategoryIcon';

const PolicyItem = ({ category, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="border-primary border-t-5 pt-6 md:pt-8">
      <button onClick={toggleOpen} className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <CategoryIcon category={category} />
          <span className="text-xl font-bold">{category}</span>
        </div>
        {isOpen ? (
          <FiChevronUp className="text-independent h-6 w-6" />
        ) : (
          <FiChevronDown className="text-independent h-6 w-6" />
        )}
      </button>

      {isOpen && (
        <div className={`mt-6 border-t border-[#B7B7B7] pt-6 md:mt-8 md:pt-8`}>
          <ul className="flex flex-col gap-1 px-3.5 md:text-lg">
            {items.map((item, idx) => (
              <li key={idx} className="flex gap-3 text-left md:gap-4">
                <div className="bg-primary mt-2.5 h-1 w-1 shrink-0 rounded-full md:h-1.5 md:w-1.5" />
                {item}
              </li>
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
