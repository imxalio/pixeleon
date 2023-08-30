import { useState } from 'react';
import SectionTitle from './Component/SectionTitle';
import Button from './Component/Button';

import first from './assets/works/1.png';
import second from './assets/works/2.png';
import third from './assets/works/3.jpg';
import fourth from './assets/works/4.jpeg';
import fifth from './assets/works/5.png';
import sixth from './assets/works/6.jpeg';
import seventh from './assets/works/7.png';
import eighth from './assets/works/8.png';
import ninth from './assets/works/9.jpeg';
import tenth from './assets/works/10.jpeg';
import eleventh from './assets/works/11.jpeg';
import twelfth from './assets/works/12.png';

const sneakPeak = [first, second, third, fourth];
const sneakPeakTree = [first, second, third];

const fullImage = [
  fifth,
  sixth,
  seventh,
  eighth,
  ninth,
  tenth,
  eleventh,
  twelfth,
];

const OurWorks = () => {
  const [data, setData] = useState();
  const [select, setSelect] = useState('designs');
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-violet-50">
      <div className="max-w-screen-xl mx-auto md:py-20 py-16 px-7">
        <SectionTitle Title={'Our Works'} />

        <div className="text-center mb-9">
          <div className="inline-block h-full text-center border-4 border-violet-500 p-1 rounded-xl shadow-xl">
            <Button
              customCss={`mr-3 ${select === 'designs' && 'bg-violet-500'}`}
              onClick={() => setSelect('designs')}
            >
              Designs
            </Button>
            <Button
              customCss={`${select === 'videos' && 'bg-violet-500'}`}
              onClick={() => setSelect('videos')}
            >
              Videos
            </Button>
          </div>
        </div>

        <div className="grid xl:grid-cols-4 lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 gap-5 gap-y-10 items-center justify-center mb-5">
          {sneakPeak.map((item) => {
            return (
              <img
                className="md:h-[370px] rounded-xl shadow-lg w-full h-full md:hidden lg:block"
                key={item}
                src={item}
              />
            );
          })}

          {sneakPeakTree.map((item) => {
            return (
              <img
                className="md:h-[370px] rounded-xl shadow-lg w-full h-full md:block hidden lg:hidden"
                key={item}
                src={item}
              />
            );
          })}

          {open &&
            fullImage.map((item) => {
              return (
                <img
                  className="md:h-[370px] rounded-xl w-full h-full"
                  key={item}
                  src={item}
                />
              );
            })}
        </div>
        <div className="text-center">
          <Button
            onClick={() => setOpen(!open)}
            customCss={'hover:bg-violet-400 transition-all duration-300'}
          >
            {open ? 'Show Less' : 'Show More'}
          </Button>
        </div>
      </div>
    </div>
  );
};
export default OurWorks;
