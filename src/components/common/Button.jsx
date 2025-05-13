const Button = ({ children, disabled = false, type = 'button', onClick }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className="bg-[#292B2E] border-2 border-[#292B2E] text-white font-extrabold text-[18px] md:text-[24px] py-[12px] px-[16px] md:py-[22px] md:px-[46px] rounded flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed font-nanumSquare hover:cursor-pointer w-[101px] h-[42px] md:w-[184px] md:h-[68px] whitespace-nowrap"
    >
      {children}
    </button>
  );
};

export default Button;
