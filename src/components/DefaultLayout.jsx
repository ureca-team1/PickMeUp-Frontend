import PolicySummary from './policySummary';
import Vote from '../components/vote';
import CheerSection from './cheering';
import Footer from './footer/index.jsx';
import React from 'react';
import RatingSection from './approvalRating';

import Header from './header/index.jsx';
import Intro from './intro/index.jsx';
import ShareSection from './share/index.jsx';

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Intro />
        <PolicySummary />
        <Vote />
        <RatingSection />
        <CheerSection />
        <ShareSection />
      </main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
