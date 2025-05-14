function Header() {
  return (
    <header>
      <div className="mw-1280 flex items-center justify-between pt-4 pb-1">
        <h1>
          <img className="h-auto w-24 md:w-40" src="/logo.svg" alt="PickMeUp 픽미업" />
        </h1>
        {/* theme 버튼 */}
      </div>
    </header>
  );
}

export default Header;
