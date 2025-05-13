import Header from './header/index.jsx';

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <main className="mw-1280 min-h-screen flex items-center justify-center">
        {/* 메인 콘텐츠 */}
      </main>
      <footer className="mw-1280"></footer>
    </>
  );
};

export default DefaultLayout;
