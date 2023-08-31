import webPage from '../assets/websites/landing1.png';
import webPage2 from '../assets/websites/landing2.png';
import webPage3 from '../assets/websites/landing3.png';

const websites = [
  {
    name: 'Veteran Investors',
    link: 'https://veteraninvestors.org/',
    image: webPage,
  },
  { name: 'الوسيط', link: 'https://alwassit.net/', image: webPage2 },
  {
    name: 'Savory Bites',
    link: 'https://savory-bites.netlify.app/',
    image: webPage3,
  },
];

const Websites = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
      {websites.map((item) => {
        return (
          <a
            href={item.link}
            className="bg-violet-800 rounded-xl shadow-lg hover:rotate-3 transition-all duration-300"
            key={item.name}
            target={`_blank`}
          >
            <img
              className="rounded-xl md:h-[200px] w-full"
              src={item.image}
            ></img>
            <div className="flex justify-around items-center p-4">
              <h1 className="text-2xl text-white">{item.name}</h1>
            </div>
          </a>
        );
      })}
    </div>
  );
};
export default Websites;
