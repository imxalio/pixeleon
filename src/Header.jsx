import Hero from './Hero';
import Navbar from './Navbar';
import BG from './assets/background.png';

const Header = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
      }}
      className="h-[750px]"
    >
      <Navbar />
      <Hero />
    </div>
  );
};
export default Header;
