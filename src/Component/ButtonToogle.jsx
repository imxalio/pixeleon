const ButtonToogle = ({ children, customCss, onClick }) => {
  return (
    <button
      className={`text-white bg-rose-500 sm:py-3 sm:px-5 py-1 px-3 sm:text-xl text-xl font-bold inline-block sm:rounded-xl rounded-md shadow-2xl transition-all duration-500 ${customCss} `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default ButtonToogle;
