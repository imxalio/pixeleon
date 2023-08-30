const Button = ({ children, customCss, onClick }) => {
  return (
    <button
      className={`text-white bg-rose-500 py-3 px-5 text-xl font-bold inline-block rounded-xl shadow-2xl transition-all duration-500 hover:bg-violet-500  ${customCss} `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
