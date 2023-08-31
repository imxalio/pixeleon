import ButtonToogle from './ButtonToogle';
import { useState } from 'react';

const Toogle = ({ myData, setSelect, select }) => {
  const [data, setData] = useState();

  return (
    <div className="text-center mb-9">
      <div className="inline-block h-full text-center border-4 border-violet-800 p-1 rounded-xl shadow-xl">
        <ButtonToogle
          customCss={`mr-3 ${select === 1 && 'bg-violet-800'}`}
          onClick={() => setSelect(1)}
        >
          Illustrations
        </ButtonToogle>
        <ButtonToogle
          customCss={`${select === 2 && 'bg-violet-800'}`}
          onClick={() => setSelect(2)}
        >
          Websites
        </ButtonToogle>
      </div>
    </div>
  );
};
export default Toogle;
