import React, { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';

const ScrollToTop = () => {
  const [scrolling, setScrolling] = useState(true);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
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
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div
      className={`fixed bottom-0 right-5 z-[50] bg-primary-1 w-8 h-8 sm:w-10 sm:h-10 rounded-full p-2 grid place-content-center cursor-pointer  transition-all duration-700 shadow-sm shadow-green-500 ${
        scrolling ? '-translate-y-8 opacity-100' : 'translate-y-full opacity-10'
      } `}
      onClick={scrollToTop}>
      <FiArrowUp className="sm:text-xl text-sm text-white" />
    </div>
  );
};

export default ScrollToTop;
