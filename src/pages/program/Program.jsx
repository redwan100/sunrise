import pImg1 from "../../assets/program1.jpg";
import pImg2 from "../../assets/program2.jpg";
import SectionTitle from "../../components/shared/SectionTitle";
import ProgramCard from "./ProgramCard";

const programData = [
  {
    id: 23,
    title: "SSS-Poura Ideal High School",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, vero velit repellendus expedita asperiores nulla non totam ipsam maxime quaerat, ullam soluta vel earum, porro quibusdam consectetur voluptatum at nihil!",
    img: pImg1,
  },
  {
    id: 253,
    title: "SSS Non-Govt. Polytechnic Institute",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, vero velit repellendus expedita asperiores nulla non totam ipsam maxime quaerat, ullam soluta vel earum, porro quibusdam consectetur voluptatum at nihil!",
    img: pImg2,
  },
  {
    id: 263,
    title: "SSS-Poura Ideal High School",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, vero velit repellendus expedita asperiores nulla non totam ipsam maxime quaerat, ullam soluta vel earum, porro quibusdam consectetur voluptatum at nihil!",
    img: pImg1,
  },
  {
    id: 2386,
    title: "SSS Non-Govt. Polytechnic Institute",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, vero velit repellendus expedita asperiores nulla non totam ipsam maxime quaerat, ullam soluta vel earum, porro quibusdam consectetur voluptatum at nihil!",
    img: pImg2,
  },
];

const Program = () => {
  return (
    <div className="w-full my-8 py-4 my-container">
      <div className="mb-8">
        <SectionTitle isCenter title="special program" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 max-w-sm mx-auto sm:max-w-full">
        {programData?.map((item) => (
          <ProgramCard key={item.id} program={item} />
        ))}
      </div>
    </div>
  );
};

export default Program;
