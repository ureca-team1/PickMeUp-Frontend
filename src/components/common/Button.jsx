const sizeClasses = {
  custom:
    'h-[38px] w-[130px] text-[14px] font-bold md:w-[223px] md:h-[48px] md:px-[40px] md:py-[14px] md:text-[20px] md:leading-[20px] md:font-extrabold',
  md: 'h-[68px] w-[184px] md:px-[46px] md:py-[22px] md:text-2xl',
};

const Button = ({ children, disabled = false, type = 'button', onClick, size = 'md' }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`font-nanumSquare flex items-center justify-center rounded border-2 border-[#292B2E] bg-[#292B2E] font-bold whitespace-nowrap text-white hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-500 dark:text-white ${sizeClasses[size]} `}
    >
      {children}
    </button>
  );
};

export default Button;
