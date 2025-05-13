import React from 'react';
import RatingSection from './approvalRating';

import Header from './header/index.jsx';

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <main className="mw-1280 min-h-screen flex items-center justify-center">
        <RatingSection />
      </main>
      <footer className="mw-1280"></footer>
    </>
  );
};

export default DefaultLayout;
