const SectionTitle = ({ title = "section title", isCenter = false }) => {
  return (
    <div
      className={`text-4xl font-medium text-primary-1 capitalize ${
        isCenter ? "text-center" : "text-left"
      }`}
    >
      {title}
    </div>
  );
};

export default SectionTitle;
