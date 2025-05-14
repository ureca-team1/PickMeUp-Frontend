const Button = ({ children, disabled = false, type = 'button', onClick }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className="font-nanumSquare flex h-[42px] w-[101px] items-center justify-center rounded border-2 border-[#292B2E] bg-[#292B2E] px-4 py-3 text-sm font-bold whitespace-nowrap text-white hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 md:h-[68px] md:w-[184px] md:px-[46px] md:py-[22px] md:text-2xl dark:bg-gray-500 dark:text-white"
    >
      {children}
    </button>
  );
};

export default Button;
