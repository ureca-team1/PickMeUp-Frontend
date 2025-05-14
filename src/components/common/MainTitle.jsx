function MainTitle({ children, className }) {
  return (
    <h3
      className={`mb-3 text-[1.75rem] font-extrabold md:mb-[26px] md:text-[3.375rem] ${className}`}
    >
      {children}
    </h3>
  );
}

export default MainTitle;
