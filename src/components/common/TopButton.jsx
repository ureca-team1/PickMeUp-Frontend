import Up from '@/assets/lets-icons_up.svg?react';

function TopButton({ className }) {
  const handleClick = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      className={`border-primary flex h-[54px] w-[54px] items-center justify-center rounded-full border-4 bg-white md:h-[70px] md:w-[70px] md:border-[5px] ${className}`}
      onClick={handleClick}
    >
      <Up className="h-auto w-6 md:w-8" />
    </button>
  );
}

export default TopButton;
