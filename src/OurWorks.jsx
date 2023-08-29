import { useState } from 'react';
import SectionTitle from './Component/SectionTitle';
import Button from './Component/Button';

import first from './assets/works/1.jpeg';
import second from './assets/works/2.jpeg';
import third from './assets/works/3.jpeg';
import fourth from './assets/works/4.jpeg';
import fifth from './assets/works/5.jpeg';
import sixth from './assets/works/6.jpg';
import seventh from './assets/works/7.jpg';
import eighth from './assets/works/8.jpg';
import ninth from './assets/works/9.jpg';
import tenth from './assets/works/10.jpg';
import eleventh from './assets/works/11.jpg';
import twelfth from './assets/works/12.jpg';

const imageNames = [
  first,
  second,
  third,
  fourth,
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

        <div className="grid md:grid-cols-5 gap-3 gap-y-10 items-center justify-center">
          {imageNames.map((item) => {
            return (
              <img className="md:h-[250px] rounded-xl" key={item} src={item} />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default OurWorks;
