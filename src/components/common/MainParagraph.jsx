function MainParagraph({ children, className }) {
  return <p className={`text-center md:text-2xl ${className}`}>{children}</p>;
}

export default MainParagraph;
