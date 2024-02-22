import { GoProjectRoadmap } from "react-icons/go";
import SectionTitle from "../../components/shared/SectionTitle";
import ProjectCard from "./ProjectCard";

import { motion } from "framer-motion";
const projects = [
  {
    id: 4525,
    title: "enrice",
    icon: GoProjectRoadmap,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nam dolorem ipsam, veritatis repellendus, aperiam ad laudantium ullam sed praesentium ",
  },
  {
    id: 4556325,
    title: "enrice",
    icon: GoProjectRoadmap,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nam dolorem ipsam, veritatis repellendus, aperiam ad laudantium ullam sed praesentium ",
  },
  {
    id: 455425,
    title: "enrice",
    icon: GoProjectRoadmap,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nam dolorem ipsam, veritatis repellendus, aperiam ad laudantium ullam sed praesentium ",
  },
  {
    id: 45625,
    title: "enrice",
    icon: GoProjectRoadmap,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nam dolorem ipsam, veritatis repellendus, aperiam ad laudantium ullam sed praesentium ",
  },
];

const Project = () => {
  return (
    <div className="w-full my-container my-8 py-4">
      <div className="my-8">
        <SectionTitle isCenter title="projects" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{
              opacity: 0,
              translateY: index % 2 === 0 ? -50 : 50,
              translateX: index % 2 === 0 ? 50 : -50,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              translateY: 0,
              translateX: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
              staggerChildren: 0.6,
            }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
