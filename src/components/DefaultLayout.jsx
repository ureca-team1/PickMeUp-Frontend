import Header from './header/index.jsx';
import Intro from './intro/index.jsx';
import CheerSection from './cheering';

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen flex justify-center">
        <Intro />
      </main>
      <footer className="mw-1280"></footer>
      <CheerSection />
    </>
  );
};

export default DefaultLayout;
