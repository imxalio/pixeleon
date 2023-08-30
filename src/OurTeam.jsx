import SectionTitle from './Component/SectionTitle';
import salah from './assets/team/salah.jpeg';
import mohamed from './assets/team/mohamed.jpeg';
import reed from './assets/team/reed.png';

const team = [
  { name: 'Salah Eddine Khaddadi', image: salah, position: 'CEO - Founder' },
  { name: 'Mohamed El Alouani', image: mohamed, position: 'Web Developer' },
  { name: 'Youssef Ourrami', image: reed, position: 'Graphic Designer' },
  {},
];

const OurTeam = () => {
  return (
    <div className="bg-violet-50">
      <div className="max-w-screen-xl mx-auto md:py-20 py-16 px-7">
        <SectionTitle Title={'Our Team'} />

        <p className="text-xl mb-7">
          For each project, we bring together the very team that fits your brief
          and deliver a quality service regardless of project value, size or
          complexity.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-2 gap-5">
          {team.map((person) => {
            return person.name ? (
              <div
                key={person.name}
                className="text-center bg-white p-3 rounded-2xl shadow-xl"
              >
                <img className="rounded-2xl mb-5" src={person.image} />
                <h2 className="font-semibold md:text-2xl text-xl mb-3">
                  {person.name}
                </h2>
                <h3 className="text-lg md:text-xl font-semibold text-violet-800">
                  {person.position}
                </h3>
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center bg-violet-800 text-white rounded-2xl shadow-xl">
                <h1 className="text-8xl flex items-center">
                  <span className="text-4xl">+</span>5
                </h1>
                <h3 className="md:text-3xl">Team Members</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default OurTeam;
