import { motion } from "framer-motion";
import newsImg from "../../assets/news.jpg";
import SectionTitle from "../../components/shared/SectionTitle";
import NewsCard from "./NewsCard";
const newses = [
  {
    id: 1,
    title: "Managers’ Workshop-2024 Held",
    date: "february 20, 2024",
    img: newsImg,
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, rem? Doloremque ipsam aliquam sit vitae, iusto delectus nostrum sequi, quam, voluptas adipisci sint porro nam! Amet molestias repudiandae quaerat repellat.",
  },
  {
    id: 13,
    title: "Managers’ Workshop-2024 Held",
    date: "february 20, 2024",
    img: newsImg,
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, rem? Doloremque ipsam aliquam sit vitae, iusto delectus nostrum sequi, quam, voluptas adipisci sint porro nam! Amet molestias repudiandae quaerat repellat.",
  },
  {
    id: 71,
    title: "Managers’ Workshop-2024 Held",
    date: "february 20, 2024",
    img: newsImg,
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, rem? Doloremque ipsam aliquam sit vitae, iusto delectus nostrum sequi, quam, voluptas adipisci sint porro nam! Amet molestias repudiandae quaerat repellat.",
  },
];

const animateVariant = {
  initial: {
    y: -100,
    opacity: 0,
  },

  animate: (index) => ({
    y: 0,
    opacity: 1,

    transition: {
      duration: 1,
      delay: 0.1 * index,
    },
  }),
};

const News = () => {
  return (
    <div className="my-container">
      <motion.div
        initial="initial"
        whileInView="animate"
        custom={4}
        variants={animateVariant}
        viewport={{ once: false, amount: 0.5 }}
        className="py-4 mb-8"
      >
        <SectionTitle isCenter title="latest news" />
      </motion.div>
      <div className="grid gap-7 sm:gap-5 sm:grid-cols-2 md:grid-cols-3 items-center">
        {newses.map((news, index) => (
          <motion.div
            key={news.id}
            initial="initial"
            whileInView="animate"
            custom={index}
            variants={animateVariant}
            viewport={{ once: false, amount: 0.5 }}
          >
            <NewsCard news={news} index={index} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default News;
