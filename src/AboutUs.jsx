import SectionTitle from './Component/SectionTitle';
import aboutUsImg from './assets/aboutUs.png';

const description =
  'At Pixeleon, we are more than just a creative agency – we are your partners in visual storytelling and digital innovation. With a passion for creativity and a commitment to excellence, we offer a diverse range of services that elevate your brand and captivate your audience. Our team of skilled professionals is dedicated to delivering top-tier solutions in Illustration Design, Social Media Management, Video Editing, and Web & Mobile Development.';

const AboutUs = () => {
  return (
    <div className="bg-violet-50">
      <div className="max-w-screen-xl mx-auto md:py-20 py-16 px-7 grid md:grid-cols-2 gap-5 items-center">
        <div>
          <img src={aboutUsImg}></img>
        </div>
        <div>
          <SectionTitle miniTitle={'About Us'} Title={'Pixeleon'} />
          <p className="text-xl">{description}</p>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
