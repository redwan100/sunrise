import achievement from "../../assets/achievement.jpg";
import SectionTitle from "../../components/shared/SectionTitle";
const Achievements = () => {
  return (
    <div>
      <div className=" my-4">
        <SectionTitle title="Awards & Achievements" />
      </div>
      <div className="rounded-md overflow-hidden">
        <img src={achievement} alt="achievement" />
      </div>
    </div>
  );
};

export default Achievements;
