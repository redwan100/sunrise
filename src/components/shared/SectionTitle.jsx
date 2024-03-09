import cn from "../../utils/cn";

const SectionTitle = ({ title = "section title", className }) => {
  return (
    <div className="text-3xl md:text-5xl font-bold">
      <h1
        className={cn(
          `bg-clip-text text-transparent bg-gradient-to-r from-gray-600 to-slate-400 capitalize`,
          className
        )}
      >
        {title}
      </h1>
    </div>
  );
};

export default SectionTitle;
