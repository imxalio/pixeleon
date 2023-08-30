const SectionTitle = ({ Title, customCss }) => {
  return (
    <div>
      <h1
        className={`text-4xl font-bold mb-10 text-violet-950 border-b-4 border-rose-500 inline-block ${customCss}`}
      >
        {Title}
      </h1>
    </div>
  );
};
export default SectionTitle;
