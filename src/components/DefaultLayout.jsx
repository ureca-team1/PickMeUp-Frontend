import Footer from './footer/index.jsx';
import Header from './header/index.jsx';
import Intro from './intro/index.jsx';

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen flex justify-center">
        <Intro />
      </main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
