import { motion } from 'framer-motion';
import newsImg from '../../assets/news.jpg';
import SectionTitle from '../../components/shared/SectionTitle';
import NewsCard from './NewsCard';
const newses = [
  {
    id: 1,
    title: 'Managers’ Workshop-2024 Held',
    date: 'february 20, 2024',
    img: newsImg,
    subtitle:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, rem? Doloremque ipsam aliquam sit vitae, iusto delectus nostrum sequi, quam, voluptas adipisci sint porro nam! Amet molestias repudiandae quaerat repellat.'
  },
  {
    id: 13,
    title: 'Managers’ Workshop-2024 Held',
    date: 'february 20, 2024',
    img: newsImg,
    subtitle:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, rem? Doloremque ipsam aliquam sit vitae, iusto delectus nostrum sequi, quam, voluptas adipisci sint porro nam! Amet molestias repudiandae quaerat repellat.'
  },
  {
    id: 71,
    title: 'Managers’ Workshop-2024 Held',
    date: 'february 20, 2024',
    img: newsImg,
    subtitle:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, rem? Doloremque ipsam aliquam sit vitae, iusto delectus nostrum sequi, quam, voluptas adipisci sint porro nam! Amet molestias repudiandae quaerat repellat.'
  }
];

const News = () => {
  return (
    <div className="my-container">
      <div className="py-4">
        <SectionTitle title="latest news" className="text-center pb-3" />
      </div>
      <div className="grid gap-7 sm:gap-5 sm:grid-cols-2 md:grid-cols-3 items-center">
        {newses.map((news, index) => (
          <motion.div
            key={news.id}
            initial={{
              opacity: 0,
              translateY: index % 2 === 0 ? -50 : 50,
              translateX: index % 2 === 0 ? 50 : -50,
              scale: 0.9
            }}
            whileInView={{
              opacity: 1,
              translateY: 0,
              translateX: 0,
              scale: 1
            }}
            transition={{
              duration: 0.5,
              staggerChildren: 0.6
            }}
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
