import Header from './header/index.jsx';
import Intro from './intro/index.jsx';
import Footer from './footer/index.jsx';
import TopButton from './common/TopButton.jsx';
import LazyWrapper from './common/LazyFadeInSection.jsx';

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen space-y-24">
        <Intro />
        <LazyWrapper componentKey="PolicySummary" delay={0.1} />
        <LazyWrapper componentKey="Vote" delay={0.1} />
        <LazyWrapper componentKey="CheerSection" delay={0.1} />
        <LazyWrapper componentKey="ShareSection" delay={0.1} />
      </main>
      <Footer />
      <TopButton className="fixed right-5 bottom-5 md:right-8" />
    </>
  );
};
export default DefaultLayout;
