import { useEffect, useState } from 'react';
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

const defaultClassName = 'w-[84px] shrink-0 text-center text-xs md:w-[170px] md:text-2xl';

function GlobalNavigation({ className }) {
  const [activeId, setActiveId] = useState('');

  const handleClick = (event, sectionId) => {
    event.preventDefault();
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });

      setActiveId(sectionId);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveId(entry.target.id);
      });
    });

    navList.forEach((item) => {
      const target = document.getElementById(item.sectionId);
      if (target) observer.observe(target);
    });

    return () => {
      navList.forEach((item) => {
        const target = document.getElementById(item.sectionId);
        if (target) observer.unobserve(target);
      });
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 z-20 items-center justify-center gap-1 bg-white py-4 md:gap-30 dark:bg-black ${className}`}
    >
      {navList.map((item) => (
        <NavLink
          to={`#${item.sectionId}`}
          className={`${defaultClassName} ${activeId === item.sectionId ? 'font-bold' : 'font-normal'} `}
          onClick={(e) => handleClick(e, item.sectionId)}
        >
          {item.caption}
        </NavLink>
      ))}
    </nav>
  );
}

export default GlobalNavigation;
