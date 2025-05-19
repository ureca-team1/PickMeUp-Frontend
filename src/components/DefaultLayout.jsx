import { useEffect, useState } from 'react';
import LazyWrapper from './common/LazyFadeInSection.jsx';
import TopButton from './common/TopButton.jsx';
import Footer from './footer/index.jsx';
import Header from './header/index.jsx';
import Intro from './intro/index.jsx';
import GlobalNavigation from './navigation/index.jsx';
import SkeletonPolicySummary from '../components/policySummary/SkeletonPolicySummary.jsx';
import SkeletonMap from '../components/map/SkeletonMap.jsx';
import SkeletonVote from '../components/vote/SkeletonVote.jsx';
import SkeletonApprovalRating from '../components/approvalRating/SkeletonApprovalRating.jsx';
import SkeletonCheerSection from '../components/cheering/SkeletonCheerSection.jsx';
import VoteCount from './voteCount/index.jsx';
import ShareSection from './share/index.jsx';

const DefaultLayout = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isEndOfScroll, setIsEndOfScroll] = useState(false);

  // 다크 모드 상태를 변경하고 localStorage에 저장
  const toggleDarkMode = () => {
    setIsDarkMode((prevState) => {
      const newState = !prevState;
      localStorage.setItem('darkMode', newState ? 'enabled' : 'disabled');
      return newState;
    });
  };

  // 페이지 로드 시, 이전에 설정된 다크 모드 상태를 확인
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'enabled') {
      setIsDarkMode(true);
    }
  }, []);

  // 다크 모드 상태에 따라 html 태그에 dark 클래스 추가
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    /** 스크롤이 끝에 다다르면 네비게이션 바 보이기 */
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setIsEndOfScroll(true);
      });
    });

    const target = document.getElementById('footer');
    if (target) observer.observe(target);

    return () => observer.unobserve(target);
  }, []);

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white">
      <main className="min-h-screen">
        <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <GlobalNavigation className={isEndOfScroll ? 'flex' : 'flex'} />
        <Intro />
        <LazyWrapper
          id="policy"
          componentKey="PolicySummary"
          SkeletonComponent={SkeletonPolicySummary}
        />

        <LazyWrapper id="map" componentKey="Map" SkeletonComponent={SkeletonMap} />
        <LazyWrapper id="vote" componentKey="Vote" SkeletonComponent={SkeletonVote} />
        <LazyWrapper
          id="poll-results"
          componentKey="ApprovalRating"
          SkeletonComponent={SkeletonApprovalRating}
        />
        <LazyWrapper
          id="comments"
          componentKey="CheerSection"
          SkeletonComponent={SkeletonCheerSection}
        />
        <VoteCount />
        <ShareSection />
        {/* <LazyWrapper componentKey="VoteCount" delay={0.1} />
        <LazyWrapper componentKey="ShareSection" delay={0.1} /> */}
      </main>
      <Footer />
      <TopButton className="fixed right-5 bottom-5 z-20 md:right-8" />
    </div>
  );
};
export default DefaultLayout;
