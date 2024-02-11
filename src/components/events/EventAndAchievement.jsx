import Achievements from "./Achievements";
import EventSlider from "./EventSlider";

const EventAndAchievement = () => {
  return (
    <div className="w-full my-container my-8 py-4 ">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="w-full overflow-hidden">
          <EventSlider />
        </div>
        <div>
          <Achievements />
        </div>
      </div>
    </div>
  );
};

export default EventAndAchievement;
