// import EventAndAchievement from "./components/events/EventAndAchievement";

import Slider from "./components/slider/Slider";
import Donation from "./pages/donation/Donation";
import EventAndAchievement from "./pages/events/EventAndAchievement";
import MomentOfSunrise from "./pages/momentOfSunrise/MomentOfSunrise";
import News from "./pages/news/News";
import Program from "./pages/program/Program";
import Project from "./pages/project/Project";
import Service from "./pages/service/Service";
import TopPriority from "./pages/topPriority/TopPriority";

const App = () => {
  return (
    <div className="">
      <Slider />
      <div>
        <Service />
      </div>
      <div>
        <News />
      </div>
      <div>
        <TopPriority />
      </div>
      <div>
        <Program />
      </div>
      <div>
        <Project />
      </div>
      <div>
        <EventAndAchievement />
      </div>
      <div>
        <Donation />
      </div>
      <div>
        <MomentOfSunrise />
      </div>
    </div>
  );
};

export default App;
