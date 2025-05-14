import React from 'react';
import Logo from '@/assets/logo.svg?react';
import { FaMoon } from 'react-icons/fa';
import { IoSunny } from 'react-icons/io5';

const Header = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <header className="mw-1280 flex items-center justify-between pt-4 pb-1">
      <h1>
        <Logo className="h-auto w-24 text-black md:w-40 dark:text-white" />
      </h1>
      {/* 다크 모드 버튼 */}
      <button onClick={toggleDarkMode} className="p-2 dark:text-white">
        {isDarkMode ? <IoSunny size={24} /> : <FaMoon size={24} />}
      </button>
    </header>
  );
};

export default Header;
