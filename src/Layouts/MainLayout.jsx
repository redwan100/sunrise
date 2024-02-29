import { motion, useScroll } from "framer-motion";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

const MainLayout = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative overflow-x-hidden">
      <motion.div
        style={{
          scaleY: scrollYProgress,
          width: "6px",
          height: "100%",
          position: "fixed",
          transformOrigin: "top",
          top: 0,
          right: 0,
          background: "#22C55E",
          zIndex: 100,
        }}
      ></motion.div>
      <div className="w-full min-h-screen flex flex-col ">
        <Navbar />
        <div className="">
          <Outlet />
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
