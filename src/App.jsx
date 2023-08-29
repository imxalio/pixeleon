import AboutUs from './AboutUs';
import './App.css';
import Header from './Header';
import OurServices from './OurServices';

const App = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <OurServices />
      <AboutUs />
    </div>
  );
};
export default App;
