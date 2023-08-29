import AboutUs from './AboutUs';
import './App.css';
import Header from './Header';
import OurServices from './OurServices';
import OurWorks from './OurWorks';

const App = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <OurServices />
      <AboutUs />
      <OurWorks />
    </div>
  );
};
export default App;
