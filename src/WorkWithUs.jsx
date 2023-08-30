import Form from './Component/Form';
import points from './assets/points.png';

const WorkWithUs = () => {
  return (
    <div className="bg-violet-50">
      <div className="max-w-screen-xl mx-auto md:py-20 py-16 px-7 text-white justify-center flex relative">
        <div className="p-16 text-center bg-gradient-to-b from-violet-800 to-violet-950 rounded-3xl w-5/6 z-20 relative">
          <h1 className="text-white text-4xl font-bold mb-10">
            Get in touch with us.
          </h1>
          <Form />
          <img
            className="hidden md:block absolute bottom-[-20%] right-[-15%] w-2/6"
            src={points}
          />
          <img
            className="hidden md:block absolute top-[-15%] left-[-20%] w-2/6 rotate-90"
            src={points}
          />
        </div>
        <div
          className="bg-violet-300 w-[85%] h-[80%] rounded-3xl rotate-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
"
        >
          &nbsp;
        </div>
      </div>
    </div>
  );
};
export default WorkWithUs;
