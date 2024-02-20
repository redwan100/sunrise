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

const News = () => {
  return (
    <div className="my-container">
      <div className="py-4 mb-8">
        <SectionTitle isCenter title="latest news" />
      </div>
      <div className="grid gap-7 sm:gap-5 sm:grid-cols-2 md:grid-cols-3 items-center">
        {newses.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default News;
