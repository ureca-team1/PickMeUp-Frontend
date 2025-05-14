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

function GlobalNavigation() {
  const linkClassName = 'w-[84px] shrink-0 text-center text-xs md:w-[170px] md:text-2xl';

  const handleClick = (event, sectionId) => {
    event.preventDefault();
    const target = document.getElementById(sectionId);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-10 flex items-center justify-center gap-1 bg-white py-4 md:gap-30">
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
  );
}

export default GlobalNavigation;
