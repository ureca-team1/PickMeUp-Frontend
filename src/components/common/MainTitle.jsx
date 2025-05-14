function MainTitle({ children, className }) {
  return (
    <h3 className={`text-[1.75rem] font-extrabold md:text-[3.375rem] ${className}`}>{children}</h3>
  );
}

export default MainTitle;
