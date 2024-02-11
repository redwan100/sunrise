import SectionTitle from "../shared/SectionTitle";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div className="w-full my-container my-8 py-4">
      <div className="my-8">
        <SectionTitle isCenter title="projects" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Project;
