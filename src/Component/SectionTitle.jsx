const SectionTitle = ({ miniTitle, Title }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-7 text-center border-b-4 border-violet-500 inline-block">
        {miniTitle}
      </h2>
      <h1 className="text-6xl font-bold mb-10 text-violet-950">{Title}</h1>
    </div>
  );
};
export default SectionTitle;