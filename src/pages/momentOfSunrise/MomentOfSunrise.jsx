import momentImg from "../../assets/moment.jpg";
import MomentOfSunriseCard from "./MomentOfSunriseCard";

const moments = [
  {
    id: 565463,
    title:
      "TMSS Public School and College Hosts Annual Inter-House Sports Competition 2024",
    date: "january 2024",
    img: momentImg,
  },
  {
    id: 56785463,
    title:
      "TMSS Public School and College Hosts Annual Inter-House Sports Competition 2024",
    date: "january 2024",
    img: momentImg,
  },
  {
    id: 565657463,
    title:
      "TMSS Public School and College Hosts Annual Inter-House Sports Competition 2024",
    date: "january 2024",
    img: momentImg,
  },
];

const MomentOfSunrise = () => {
  return (
    <div className="w-full p-8">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 my-container">
        {moments.map((moment) => (
          <MomentOfSunriseCard key={moment.id} moment={moment} />
        ))}
      </div>
    </div>
  );
};

export default MomentOfSunrise;
