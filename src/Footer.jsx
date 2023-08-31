import logo from './assets/logoW.png';
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="bg-violet-800">
      <div className="max-w-screen-xl md:pt-20 pt-16 pb-5 px-7 mx-auto">
        <div className="grid md:grid-cols-2 justify-center items-center gap-10 mb-10">
          <div className="flex text-white gap-10 justify-center items-center">
            <img className="w-[80px]" src={logo} />

            <div>
              <h1 className="text-2xl font-bold mb-3">Pixeleon Agency</h1>
              <p className="text-lg md:w-5/6">
                With passion and excellence, we offer diverse services that
                elevate your brand.
              </p>
            </div>
          </div>

          <div className="flex  md:justify-end justify-center gap-5 items-center">
            <a
              href="#"
              className="text-violet-800 text-2xl bg-white p-1 rounded-lg hover:text-violet-500"
            >
              <BsFacebook />
            </a>

            <a
              href="#"
              className="text-violet-800 text-2xl bg-white p-1 rounded-lg hover:text-violet-500"
            >
              <BsTwitter />
            </a>
            <a
              target={`_blank`}
              href="https://www.instagram.com/pixeleonagency/"
              className="text-violet-800 text-2xl bg-white p-1 rounded-lg  hover:text-violet-500"
            >
              <BsInstagram />
            </a>
            <a
              target={`_blank`}
              href="https://www.linkedin.com/company/pixeleon-agency/"
              className="text-violet-800 text-2xl bg-white p-1 rounded-lg  hover:text-violet-500"
            >
              <BsLinkedin />
            </a>
          </div>
        </div>
        <p className="text-white text-center">
          Copyright 2023 by Pixeleon Agency. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};
export default Footer;
