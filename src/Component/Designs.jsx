import first from '../assets/works/1.png';
import second from '../assets/works/2.png';
import third from '../assets/works/3.jpg';
import fourth from '../assets/works/4.jpeg';
import fifth from '../assets/works/5.png';
import sixth from '../assets/works/6.jpeg';
import seventh from '../assets/works/7.png';
import eighth from '../assets/works/8.png';
import ninth from '../assets/works/9.jpeg';
import tenth from '../assets/works/10.jpeg';
import eleventh from '../assets/works/11.jpeg';
import twelfth from '../assets/works/12.png';

const sneakPeak = [eighth, third, seventh, fourth];
const sneakPeakTree = [eighth, third, seventh];

const fullImage = [
  twelfth,
  ninth,
  first,
  second,
  fifth,
  tenth,
  eleventh,
  sixth,
];

const Designs = ({ open }) => {
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 gap-5 gap-y-10 items-center justify-center mb-10">
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
  );
};
export default Designs;
