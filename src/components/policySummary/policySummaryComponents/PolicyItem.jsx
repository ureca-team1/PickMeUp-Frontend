import { useState, useEffect } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import CategoryIcon from './CategoryIcon';
import '../../../styles/policy.css';

const PolicyItem = ({ category, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false); // 애니메이션 제어
  const toggleOpen = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setVisible(true), 10);
      return () => clearTimeout(timer);
    } else {
      setVisible(false);
    }
  }, [isOpen]);

  return (
    <div className="border-primary border-t-5 pt-6 md:pt-8 dark:border-white">
      <button onClick={toggleOpen} className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <CategoryIcon category={category} />
          <span className="text-xl font-bold">{category}</span>
        </div>
        {isOpen ? (
          <FiChevronUp className="text-independent h-6 w-6 dark:text-white" />
        ) : (
          <FiChevronDown className="text-independent h-6 w-6 dark:text-white" />
        )}
      </button>

      {isOpen && (
        <div className="fade-wrapper">
          <div
            className={`fade-in-up mt-6 border-t border-[#B7B7B7] pt-6 md:mt-8 md:pt-8 dark:text-white ${
              visible ? 'show' : ''
            }`}
          >
            <ul className="flex flex-col gap-1 px-3.5 md:text-lg">
              {items.map((item, idx) => (
                <li key={idx} className="flex gap-3 text-left md:gap-4">
                  <div className="bg-primary mt-2.5 h-1 w-1 shrink-0 rounded-full md:h-1.5 md:w-1.5 dark:border-white" />
                  {item}
                </li>
              ))}
            </ul>
          </div>{' '}
        </div>
      )}
    </div>
  );
};

export default PolicyItem;

//아이콘 패키지 설치
//npm install react-icons

//공약 항목 > 드롭다운으로
