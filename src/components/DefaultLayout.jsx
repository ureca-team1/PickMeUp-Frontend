import Vote from '../components/vote';
import CheerSection from './cheering';
import TopButton from './common/TopButton.jsx';
import Footer from './footer/index.jsx';
import Header from './header/index.jsx';
import Intro from './intro/index.jsx';
import GlobalNavigation from './navigation/index.jsx';
import PolicySummary from './policySummary';
import ShareSection from './share/index.jsx';
import React, { useState, useEffect } from 'react';

const DefaultLayout = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 페이지 로드 시, 이전에 설정된 다크 모드 상태를 확인
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'enabled') {
      setIsDarkMode(true);
    }
  }, []);

  // 다크 모드 상태를 변경하고 localStorage에 저장
  const toggleDarkMode = () => {
    setIsDarkMode((prevState) => {
      const newState = !prevState;
      localStorage.setItem('darkMode', newState ? 'enabled' : 'disabled');
      return newState;
    });
  };

  // 다크 모드 상태에 따라 html 태그에 dark 클래스 추가
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white">
      <main className="min-h-screen">
        <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <GlobalNavigation />
        <Intro />
        <PolicySummary />
        <Vote />
        <CheerSection />
        <ShareSection />
      </main>
      <Footer />
      <TopButton className="fixed right-5 bottom-5 md:right-8" />
    </div>
  );
};

export default DefaultLayout;
