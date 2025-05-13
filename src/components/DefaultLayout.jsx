import Footer from './footer/index.jsx';
import Header from './header/index.jsx';
import Intro from './intro/index.jsx';
import CheerSection from './cheering';

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <main className="flex min-h-screen justify-center">
        <Intro />
      </main>
      <CheerSection />
      <Footer />
    </>
  );
};

export default DefaultLayout;
