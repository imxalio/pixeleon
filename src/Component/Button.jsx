const Button = ({ children, customCss, onClick }) => {
  return (
    <button
      className={`bg-rose-500 p-2 text-white font-medium rounded-xl ${customCss}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
