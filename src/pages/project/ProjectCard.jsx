const ProjectCard = ({ project }) => {
  const { title, icon: Icon, desc } = project;
  return (
    <div className="bg-white p-4 rounded-md cShadow max-w-xs w-full sm:max-w-full mx-auto  transition h-[10rem] group overflow-hidden">
      <div className="group-hover:-translate-y-[8.5rem] transition duration-500">
        <h1 className="uppercase text-2xl font-semibold flex gap-2 items-center py-12">
          <Icon className="text-5xl text-primary-1 " />{" "}
          <span className="text-gray-700">{title}</span>
        </h1>
        <p className="text-gray-600 text-sm">{desc}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
