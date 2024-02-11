import Service from "./components/Service";
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
    </div>
  );
};

export default App;
