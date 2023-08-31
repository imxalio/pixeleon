import logo from '../assets/logoW.png';

const Logo = () => {
  return (
    <a href="#nav">
      <img className="p-2 w-[80px] md:w-[100px]" src={logo}></img>
    </a>
  );
};
export default Logo;
