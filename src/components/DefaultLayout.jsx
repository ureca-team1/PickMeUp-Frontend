import Vote from '../components/vote';
import CheerSection from './cheering';
import TopButton from './common/TopButton.jsx';
import Footer from './footer/index.jsx';
import Header from './header/index.jsx';
import Intro from './intro/index.jsx';
import GlobalNavigation from './navigation/index.jsx';
import PolicySummary from './policySummary';
import ShareSection from './share/index.jsx';

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <GlobalNavigation />
        <Intro />
        <PolicySummary />
        <Vote />
        <CheerSection />
        <ShareSection />
      </main>
      <Footer />
      <TopButton className="fixed right-5 bottom-5 md:right-8" />
    </>
  );
};

export default DefaultLayout;
