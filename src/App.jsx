import Service from "./components/Service";
import Slider from "./components/slider/Slider";

const App = () => {
  return (
    <div className="">
      <Slider />
      <div>
        <Service />
      </div>
      <div className="h-[200vh]"></div>
    </div>
  );
};

export default App;
