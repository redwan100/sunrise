// import EventAndAchievement from "./components/events/EventAndAchievement";

import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import Slider from "./components/slider/Slider";
import Donation from "./pages/donation/Donation";
import EventAndAchievement from "./pages/events/EventAndAchievement";
import MomentOfSunrise from "./pages/momentOfSunrise/MomentOfSunrise";
import News from "./pages/news/News";
import Program from "./pages/program/Program";
import Service from "./pages/service/Service";
import TopPriority from "./pages/topPriority/TopPriority";
const App = () => {
  const [scrolling, setScrolling] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 300) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      <div
        className={`fixed bottom-0 right-5 z-50 bg-primary-1 w-8 h-8 rounded-full p-2 grid place-content-center shadow cursor-pointer translate-y-full transition-all duration-700 ${
          scrolling ? "-translate-y-8" : null
        } `}
        onClick={scrollToTop}
      >
        <FiArrowUp className="text-xl text-white" />
      </div>
      <div>
        <Slider />
      </div>
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
