import AboutUs from './AboutUs';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import OurServices from './OurServices';
import OurTeam from './OurTeam';
import OurWorks from './OurWorks';
import WorkWithUs from './WorkWithUs';

const App = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <OurServices />
      <AboutUs />
      <OurWorks />
      <OurTeam />
      <WorkWithUs />
      <Footer />
    </div>
  );
};
export default App;
