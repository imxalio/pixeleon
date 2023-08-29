import Design from './assets/icons/design.png';
import SocialMedia from './assets/icons/socialMedia.png';
import VideoEditing from './assets/icons/videoEditing.png';
import WebDev from './assets/icons/webDev.png';
import blob from './assets/blob.svg';
import shurig from './assets/shurig.svg';
import SectionTitle from './Component/SectionTitle';

const ourServices = [
  {
    category: 'Illustration Design',
    description:
      'Designing visual content and Social media graphics, Infographics for data visualizations, Brand identity development, website design (UI/UX).',
    icon: Design,
  },
  {
    category: 'Video Editing',
    description:
      'Crafting compelling videos, Adding subtitles and captions, Integrating voiceovers, Optimizing videos for different platforms and devices.',
    icon: VideoEditing,
  },
  {
    category: 'Social Media Management',
    description:
      'Developing visual and written content, including images, videos, graphics, and captions. Engaging with the community through likes, comments, and shares.',
    icon: SocialMedia,
  },
  {
    category: 'Web &  Mobile Development',
    description:
      'Building the user interface and Ensuring responsive design for various screen sizes and devices. Building Cross-Platform Apps, Debugging and fixing issues.',
    icon: WebDev,
  },
];

const OurServices = () => {
  return (
    <div className="max-w-screen-xl mx-auto md:py-20 py-16 px-7 relative ">
      <div className="w-[300%] h-[120%] absolute bg-violet-50 -rotate-[12deg] right-[-50%] bottom-[-50%]  z-[-10] "></div>
      <img
        className="absolute w-[300px] z-[-10] top-[15%] md:right-[-15%] opacity-25 "
        src={blob}
      ></img>
      <img
        className="absolute w-[300px] z-[-10] bottom-[0%] md:left-[-15%] opacity-25"
        src={shurig}
      ></img>

      <SectionTitle miniTitle={'Our Services'} Title={'What we do?'} />
      <div className="grid md:grid-cols-4 gap-7 z-10">
        {ourServices.map((item, index) => {
          return (
            <div
              key={index}
              className="shadow-xl p-8 rounded-3xl md:h-[376px] flex flex-col justify-between bg-white z-10"
            >
              <div>
                <img className="w-12 mb-5 " src={item.icon}></img>
                <h2 className="text-2xl font-semibold mb-3">{item.category}</h2>
              </div>

              <p className="text-lg">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default OurServices;
