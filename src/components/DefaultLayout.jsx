import Header from './header/index.jsx';
import Intro from './intro/index.jsx';

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen flex justify-center">
        <Intro />
      </main>
      <footer className="mw-1280"></footer>
    </>
  );
};

export default DefaultLayout;
