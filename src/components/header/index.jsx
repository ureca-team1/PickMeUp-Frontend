import { NavLink } from 'react-router-dom';

const navList = [
  {
    caption: '공약 총정리',
    sectionId: 'policy',
  },
  {
    caption: '모의 투표',
    sectionId: 'vote',
  },
  {
    caption: '실시간 지지율',
    sectionId: 'poll-results',
  },
  {
    caption: '응원 한마디',
    sectionId: 'comments',
  },
];

function Header() {
  const linkClassName = 'w-[84px] shrink-0 text-center text-xs md:w-[170px] md:text-2xl';

  const handleClick = (event, sectionId) => {
    event.preventDefault();
    const target = document.getElementById(sectionId);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="relative">
      <div className="mw-1280 flex items-center justify-between py-4">
        <h1>
          <img className="h-auto w-24 md:w-40" src="/logo.svg" alt="PickMeUp 픽미업" />
        </h1>
        {/* theme 버튼 */}
      </div>
      <nav className="sticky top-0 z-10 flex items-center justify-center gap-1 bg-amber-300 py-4 md:gap-30">
        {navList.map((item) => (
          <NavLink
            to={`#${item.sectionId}`}
            className={linkClassName}
            onClick={(e) => handleClick(e, item.sectionId)}
          >
            {item.caption}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Header;
