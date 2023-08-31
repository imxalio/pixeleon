import { useState } from 'react';
import SectionTitle from './Component/SectionTitle';
import Button from './Component/Button';
import Designs from './Component/designs';
import Websites from './Component/Websites';
import Toogle from './Component/Toogle';

const OurWorks = () => {
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState(1);

  return (
    <div id="work" className="bg-violet-50">
      <div className="max-w-screen-xl mx-auto md:py-20 py-16 px-7">
        <SectionTitle Title={'Our Works'} />

        <Toogle select={select} setSelect={setSelect} />

        {select === 1 && (
          <div>
            <Designs open={open} />
            <div className="text-center">
              <Button
                onClick={() => setOpen(!open)}
                customCss={'hover:bg-violet-400 transition-all duration-300'}
              >
                {open ? 'Show Less' : 'Show More'}
              </Button>
            </div>
          </div>
        )}

        {select === 2 && <Websites />}
      </div>
    </div>
  );
};
export default OurWorks;
