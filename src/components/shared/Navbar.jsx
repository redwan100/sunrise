import { useEffect, useState } from "react";
import { IoCall } from "react-icons/io5";
import {
  MdEmail,
  MdKeyboardArrowDown,
  MdOutlineArrowDropDown,
  MdOutlineLocationCity,
} from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import Container from "./Container";

import { CgMenuLeft } from "react-icons/cg";
import { IoCloseSharp } from "react-icons/io5";

import { motion } from "framer-motion";
import DonationBtn from "./buttons/DonationBtn";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  const [selected, setSelected] = useState(null);

  const [showNav, setShowNav] = useState(true);

  const toggleNav = () => {
    setShowNav((prev) => !prev);
  };

  const toggleDropdown = (linkName) => {
    if (selected === linkName) {
      return setSelected(null);
    }

    setSelected(linkName);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
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
    <>
      <motion.div
        initial={{
          translateY: -100,
        }}
        animate={{
          translateY: 0,
        }}
        transition={{
          duration: 3,
        }}
        className="w-full bg-green-500 text-white py-3 px-2 hidden md:block"
      >
        <Container>
          {/* ! navbar tob  */}
          <div className="*:flex *:items-center *:gap-2 *:text-md items-center justify-center gap-6 flex">
            <div>
              <MdOutlineLocationCity />
              <p> SSS Bhaban, 6/1, Lalmatia, Dhaka-1207</p>
            </div>
            <div>
              <MdEmail />
              <a href="mailto:example@gmail.com">example@gmail.com</a>
            </div>
            <div>
              <IoCall />
              <a href="tel:0123456789">0123456789</a>
            </div>
          </div>
        </Container>
      </motion.div>

      {/* navbar  */}

      <motion.div
        initial={{
          translateY: 100,
        }}
        animate={{
          translateY: 0,
        }}
        transition={{
          duration: 2,
          delay: 0.3,
        }}
        className={`w-full shadow py-1 transition duration-500 ${
          scrolling
            ? "fixed top-0 left-0 z-50 bg-gradient-to-bl to-pink-50 from-amber-100 shadow-lg"
            : "bg-white"
        }`}
      >
        <Container>
          <div className=" flex items-center gap-8 text-lg p-3 justify-between">
            <Link to={"/"}>
              <img src={logo} alt="logo" className="xl:w-[5rem] w-[5rem]" />
            </Link>

            {/* menu  */}
            <div className="hidden xl:block">
              <ul className="flex items-center gap-3 w-max">
                <li className="font-medium text-lg hover:text-primary-1 transition-colors">
                  <Link to={"/"}>Home</Link>
                </li>

                {/* drop down menu  */}
                <li className="relative  group">
                  <h1 className="cursor-pointer font-medium text-lg flex items-center hover:text-primary-1 transition-colors ">
                    Who We Are
                    <MdOutlineArrowDropDown className="text-gray-400" />
                  </h1>
                  <ul className="absolute left-0 top-3 z-30 w-[13rem] bg-white shadow-sm backdrop-blur-md *:text-gray-600 *:w-full hover:*:bg-gradient-to-tr from-lime-300 to-green-500  hover:*:text-gray-800 hover:*:font-semibold  *:px-4 *:py-2 min-w-36 space-y-2 translate-y-8  group-hover:visible group-hover:block group-hover:translate-y-4 transition *:transition duration-200 *:cursor-pointer rounded-md  border border-gray-300 invisible *:text-base overflow-hidden">
                    <li>
                      <Link to={"/"}>Social Development</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Social Enterprise</Link>
                    </li>
                  </ul>
                </li>
                {/* drop down menu  */}
                {/* drop down menu  */}
                <li className="relative  group">
                  <h1 className="cursor-pointer font-medium text-lg flex items-center hover:text-primary-1 transition-colors ">
                    What We Do
                    <MdOutlineArrowDropDown className="text-gray-400" />
                  </h1>
                  <ul className="absolute left-0 top-3 z-30 w-[13rem] bg-white shadow-sm backdrop-blur-md *:text-gray-600 *:w-full hover:*:bg-gradient-to-tr from-lime-300 to-green-500  hover:*:text-gray-800 hover:*:font-semibold  *:px-4 *:py-2 min-w-36 space-y-2 translate-y-8  group-hover:visible group-hover:block group-hover:translate-y-4 transition *:transition duration-200 *:cursor-pointer rounded-md  border border-gray-300 invisible *:text-base overflow-hidden">
                    <li>
                      <Link to={"/"}>Social Development</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Social Enterprise</Link>
                    </li>
                  </ul>
                </li>
                {/* drop down menu  */}

                <li className="font-medium text-lg hover:text-primary-1 transition-colors">
                  <Link to={"/contact"}>Contact</Link>
                </li>
                <li className="font-medium text-lg hover:text-primary-1 transition-colors">
                  <Link to={"/donation-details"}>
                    <DonationBtn
                      text="donate now"
                      className="text-base py-2 px-3 font-medium"
                    />
                  </Link>
                </li>
              </ul>
            </div>

            {/* hamburger menu  */}

            <CgMenuLeft
              className="xl:hidden md:text-3xl text-xl cursor-pointer hover:text-primary-1 transition-colors "
              onClick={toggleNav}
            />
          </div>
        </Container>
      </motion.div>

      {/* TODO: responsive mobile sidebar  */}

      <div
        className={`w-full h-full fixed top-0 right-0 transition duration-300 bg-slate-700/80 z-50 xl:hidden   ${
          showNav ? "translate-x-full" : "translate-x-0"
        }`}
      >
        <ul className=" p-6 space-y-3 sm:w-1/2 w-3/4 h-full bg-gradient-to-tl to-gray-300 from-gray-100 shadow-xl absolute top-0 right-0">
          {/* close button  */}
          <IoCloseSharp
            className="absolute top-3 right-3 text-2xl text-primary-1 cursor-pointer"
            onClick={toggleNav}
          />
          {/* close button  */}

          <li className="text-lg font-medium border-b border-dashed border-primary-1">
            <Link to={"/"}>Home</Link>
            {/* <hr className="h-[2px] bg-primary-1" /> */}
          </li>
          <li className="overflow-hidden transition duration-500 ">
            <div
              onClick={() => toggleDropdown("about")}
              className="flex items-center justify-between cursor-pointer"
            >
              <h1 className="text-lg font-medium mb-1 ">About Page</h1>
              <MdKeyboardArrowDown className="text-2xl " />
            </div>
            <ul
              className={`bg-gray-100  rounded-md transition duration-300 space-y-3 *:text-slate-800 hover:*:text-primary-1 *:cursor-pointer *:border-b *:border-primary-1/40 *:border-dashed *:pb-1  ${
                selected === "about"
                  ? "max-h-max border border-slate-300 py-2 px-4 h-full transition duration-500 shadow-sm"
                  : "max-h-0 h-0 transition  duration-200"
              }`}
            >
              <li>
                <Link to={"/about"}>About us </Link>
              </li>
              <li>page 1</li>
              <li>page 3</li>
              <li>page 4</li>
              <li>page 5</li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
