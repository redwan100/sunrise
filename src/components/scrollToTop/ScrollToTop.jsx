import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
const ScrollToTop = () => {
  const [scrolling, setScrolling] = useState(true);
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
        return setScrolling(true);
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
    <div
      className={`fixed bottom-0 right-5 z-[100] bg-primary-1 w-8 h-8 rounded-full p-2 grid place-content-center shadow cursor-pointer  transition-all duration-700 ${
        scrolling ? "-translate-y-8 opacity-100" : "translate-y-full opacity-10"
      } `}
      onClick={scrollToTop}
    >
      <FiArrowUp className="text-xl text-white" />
    </div>
  );
};

export default ScrollToTop;
