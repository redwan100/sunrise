import { motion } from "framer-motion";
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
        {moments.map((moment, index) => (
          <motion.div
            initial={{
              opacity: 0,
              translateX: index % 2 === 0 ? -50 : 50,
              translateY: index % 2 === 0 ? 50 : -50,
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
            key={moment.id}
          >
            <MomentOfSunriseCard moment={moment} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MomentOfSunrise;
