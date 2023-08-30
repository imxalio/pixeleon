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
              <h1 className="text-3xl font-bold mb-3">Pixeleon Agency</h1>
              <p className="text-xl md:w-5/6">
                With passion and excellence, we offer diverse services that
                elevate your brand.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-5">
            <a
              href="#"
              className="text-violet-800 text-4xl bg-white p-1 rounded-lg"
            >
              <BsFacebook />
            </a>

            <a
              href="#"
              className="text-violet-800 text-4xl bg-white p-1 rounded-lg"
            >
              <BsTwitter />
            </a>
            <a
              href="#"
              className="text-violet-800 text-4xl bg-white p-1 rounded-lg"
            >
              <BsInstagram />
            </a>
            <a
              href="#"
              className="text-violet-800 text-4xl bg-white p-1 rounded-lg"
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
