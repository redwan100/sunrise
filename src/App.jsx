import Service from "./components/Service";
import EventAndAchievement from "./components/events/EventAndAchievement";
import News from "./components/news/News";
import Program from "./components/program/Program";
import Project from "./components/project/Project";

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
        <Program />
      </div>
      <div>
        <Project />
      </div>
      <div>
        <EventAndAchievement />
      </div>
    </div>
  );
};

export default App;
