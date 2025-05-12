//Button.jsx
const SubmitButton = ({ children, disabled = false, type = 'button', onClick }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className="bg-[#292B2E] border-2 border-[#292B2E] text-white font-extrabold text-2xl py-[22px] px-[46px] rounded flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed font-nanumSquare"
    >
      {children}
    </button>
  );
};

export default SubmitButton;
