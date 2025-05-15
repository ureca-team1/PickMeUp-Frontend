import Header from './header/index.jsx';
import Intro from './intro/index.jsx';
import Footer from './footer/index.jsx';
import TopButton from './common/TopButton.jsx';
import LazyWrapper from './common/LazyFadeInSection.jsx';
import GlobalNavigation from './navigation/index.jsx';
import React, { useState, useEffect } from 'react';
import Map from './map/index.jsx';

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
        <LazyWrapper componentKey="PolicySummary" delay={0.1} />
        <Map />
        <LazyWrapper componentKey="Vote" delay={0.1} />
        <LazyWrapper componentKey="CheerSection" delay={0.1} />
        <LazyWrapper componentKey="ShareSection" delay={0.1} />
      </main>
      <Footer />
      <TopButton className="fixed right-5 bottom-5 md:right-8" />
    </div>
  );
};
export default DefaultLayout;
