import SectionTitle from './Component/SectionTitle';
import aboutUsImg from './assets/aboutUs.png';

const description =
  'At Pixeleon, we are more than just a creative agency – we are your partners in visual storytelling and digital innovation. With a passion for creativity and a commitment to excellence, we offer a diverse range of services that elevate your brand and captivate your audience. Our team of skilled professionals is dedicated to delivering top-tier solutions in Illustration Design, Social Media Management, Video Editing, and Web & Mobile Development.';

const AboutUs = () => {
  return (
    <div className="bg-violet-50">
      <div className="max-w-screen-xl mx-auto md:py-20 py-16 px-7 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative">
          <img className="z-30 relative" src={aboutUsImg}></img>
          <div className="h-[350px] w-[350px] bg-violet-300 rounded-[50%] absolute z-10 bottom-0 opacity-25"></div>
          <div className="h-[350px] w-[350px] bg-violet-300 rounded-[50%] absolute z-10 right-0 top-0 opacity-10"></div>
        </div>
        <div>
          <SectionTitle miniTitle={'About Us'} Title={'About Pixeleon'} />
          <p className="text-xl">{description}</p>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
