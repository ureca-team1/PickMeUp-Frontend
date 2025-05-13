import Header from './header/index.jsx';

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <main className="mw-1280 min-h-screen flex items-center justify-center">
        <div class="bg-democratic text-white">더불어민주당</div>
        <div class="text-people">국민의힘</div>
        <div class="text-reform">개혁신당</div>
        <div className="bg-people text-white font-nanum px-4 py-2 rounded">국민의힘</div>
      </main>
      <footer className="mw-1280"></footer>
    </>
  );
};

export default DefaultLayout;
