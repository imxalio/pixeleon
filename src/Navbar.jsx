import { useState } from 'react';
import logo from './assets/logoW.png';

const Navbar = () => {
  const [open, setIsOpen] = useState(false);

  return (
    <div className=" md:flex md:p-6 p-3 max-w-screen-xl mx-auto justify-between items-center md:bg-transparent bg-violet-950 md:shadow-none shadow-2xl ">
      <img className="p-2 w-[80px] md:w-[100px]" src={logo}></img>
      <div
        onClick={() => setIsOpen(!open)}
        className="text-5xl text-white absolute top-8 right-4 md:hidden"
      >
        <ion-icon name={open ? 'close-outline' : 'menu-outline'}></ion-icon>
      </div>

      <ul
        className={`text-white flex flex-col md:flex-row lg:gap-7 gap-4 text-xl   items-center font-medium absolute md:static md:bg-transparent bg-violet-950  md:z-auto z-[2] left-0 w-full md:w-auto md:pb-0 pb-10 transition-all duration-500 ease-in select-none shadow-2xl ${
          open ? 'top-[100px]' : 'top-[-490px]'
        }`}
      >
        <a className="transition-all duration-300 hover:text-rose-500" href="#">
          Home
        </a>
        <a className="transition-all duration-300 hover:text-rose-500" href="#">
          About Us
        </a>
        <a className="transition-all duration-300 hover:text-rose-500" href="#">
          Services
        </a>
        <a className="transition-all duration-300 hover:text-rose-500" href="#">
          Portfolio
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
