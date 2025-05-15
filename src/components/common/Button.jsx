const Button = ({ children, className, ...restProps }) => {
  return (
    <button
      className={`border-primary bg-primary flex items-center justify-center rounded border-2 px-4 py-3 text-sm font-bold whitespace-nowrap text-white disabled:cursor-not-allowed disabled:opacity-50 md:px-11 md:py-5 md:text-2xl md:font-extrabold dark:bg-gray-500 dark:text-white ${className}`}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
