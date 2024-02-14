// import EventAndAchievement from "./components/events/EventAndAchievement";
import News from "./components/news/News";
import Program from "./components/program/Program";
import Project from "./components/project/Project";
import Service from "./components/service/Service";
// import Slider from "./components/slider/Slider";
import TopPriority from "./components/topPriority/TopPriority";

const App = () => {
  return (
    <div className="">
      {/* <Slider /> */}
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
      <div>{/* <EventAndAchievement /> */}</div>
    </div>
  );
};

export default App;
