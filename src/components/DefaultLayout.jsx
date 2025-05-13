import Header from './header/index.jsx';
import Intro from './intro/index.jsx';

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <main className="mw-1280 min-h-screen flex justify-center">
        <Intro />
      </main>
      <footer className="mw-1280"></footer>
    </>
  );
};

export default DefaultLayout;
