import { useEffect, useState } from "react";
import { IoCall } from "react-icons/io5";
import {
  MdEmail,
  MdOutlineArrowDropDown,
  MdOutlineLocationCity,
} from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import Container from "./Container";

import { CgMenuLeft } from "react-icons/cg";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

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
  }, []); //
  return (
    <>
      <div className="w-full bg-green-500 text-white py-3 px-2 hidden md:block">
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
      </div>

      {/* navbar  */}

      <nav
        className={`w-full shadow py-1 transition duration-500 ${
          scrolling ? "sticky top-0 left-0 z-50 bg-white shadow-lg" : ""
        }`}
      >
        <Container>
          <div className=" flex items-center gap-8 text-lg p-3 justify-between">
            <img src={logo} alt="logo" className="xl:w-[8rem] w-[5rem]" />

            {/* menu  */}
            <div className="hidden xl:block">
              <ul className="flex items-center gap-4">
                <li className="font-medium text-xl hover:text-primary-1 transition-colors">
                  <Link to={"/"}>Home</Link>
                </li>

                {/* drop down menu  */}
                <li className="relative w-full group">
                  <h1 className="cursor-pointer font-medium text-xl flex items-center hover:text-primary-1 transition-colors ">
                    About us
                    <MdOutlineArrowDropDown className="text-gray-400" />
                  </h1>
                  <ul className="absolute left-0 top-3 w-full z-30 bg-white shadow-sm backdrop-blur-md *:text-gray-600 *:w-full hover:*:bg-slate-400 hover:*:text-gray-50  *:px-4 *:py-2 min-w-36 space-y-4 translate-y-8  group-hover:visible group-hover:block group-hover:translate-y-4 transition *:transition duration-200 *:cursor-pointer rounded-md  border border-gray-300 invisible">
                    <li>
                      <Link to={"/"}>about us</Link>
                    </li>
                    <li>
                      <Link to={"/"}>about us</Link>
                    </li>
                    <li>
                      <Link to={"/"}>about us</Link>
                    </li>
                  </ul>
                </li>
                {/* drop down menu  */}
                {/* drop down menu  */}
                <li className="relative w-full group">
                  <h1 className="cursor-pointer font-medium text-xl flex items-center hover:text-primary-1 transition-colors ">
                    About us
                    <MdOutlineArrowDropDown className="text-gray-400" />
                  </h1>
                  <ul className="absolute left-0 top-3 w-full z-30 bg-white shadow-sm backdrop-blur-md *:text-gray-600 *:w-full hover:*:bg-slate-400 hover:*:text-gray-50  *:px-4 *:py-2 min-w-36 space-y-4 translate-y-8  group-hover:visible group-hover:block group-hover:translate-y-4 transition *:transition duration-200 *:cursor-pointer rounded-md  border border-gray-300 invisible">
                    <li>
                      <Link to={"/"}>about us</Link>
                    </li>
                    <li>
                      <Link to={"/"}>about us</Link>
                    </li>
                    <li>
                      <Link to={"/"}>about us</Link>
                    </li>
                  </ul>
                </li>
                {/* drop down menu  */}
                {/* drop down menu  */}
                <li className="relative w-full group">
                  <h1 className="cursor-pointer font-medium text-xl flex items-center hover:text-primary-1 transition-colors ">
                    About us
                    <MdOutlineArrowDropDown className="text-gray-400" />
                  </h1>
                  <ul className="absolute left-0 top-3 w-full z-30 bg-white shadow-sm backdrop-blur-md *:text-gray-600 *:w-full hover:*:bg-slate-400 hover:*:text-gray-50  *:px-4 *:py-2 min-w-36 space-y-4 translate-y-8  group-hover:visible group-hover:block group-hover:translate-y-4 transition *:transition duration-200 *:cursor-pointer rounded-md  border border-gray-300 invisible">
                    <li>
                      <Link to={"/"}>about us</Link>
                    </li>
                    <li>
                      <Link to={"/"}>about us</Link>
                    </li>
                    <li>
                      <Link to={"/"}>about us</Link>
                    </li>
                  </ul>
                </li>
                {/* drop down menu  */}
                {/* drop down menu  */}
                <li className="relative w-full group">
                  <h1 className="cursor-pointer font-medium text-xl flex items-center hover:text-primary-1 transition-colors ">
                    About us
                    <MdOutlineArrowDropDown className="text-gray-400" />
                  </h1>
                  <ul className="absolute left-0 top-3 w-full z-30 bg-white shadow-sm backdrop-blur-md *:text-gray-600 *:w-full hover:*:bg-slate-400 hover:*:text-gray-50  *:px-4 *:py-2 min-w-36 space-y-4 translate-y-8  group-hover:visible group-hover:block group-hover:translate-y-4 transition *:transition duration-200 *:cursor-pointer rounded-md  border border-gray-300 invisible">
                    <li>
                      <Link to={"/"}>about us</Link>
                    </li>
                    <li>
                      <Link to={"/"}>about us</Link>
                    </li>
                    <li>
                      <Link to={"/"}>about us</Link>
                    </li>
                  </ul>
                </li>
                {/* drop down menu  */}
              </ul>
            </div>

            {/* hamburger menu  */}

            <CgMenuLeft className="xl:hidden text-3xl cursor-pointer hover:text-primary-1 transition-colors " />
          </div>
        </Container>
      </nav>

      {/* responsive sidebar  */}

      <div className="w-full h-full fixed top-0 left-0 bg-slate-300/80 z-50 xl:hidden">
        <ul className=" p-4 space-y-3 bg-white w-1/2 h-full  ">
          <li className="text-lg font-medium">
            <Link to={"/"}>Home</Link>
            <hr className="h-[2px] bg-primary-1" />
          </li>
          <li className="overflow-hidden ">
            <h1 className="text-lg font-medium mb-1 cursor-pointer">
              About Page
            </h1>
            <ul
              className={`bg-gray-400 pl-3 rounded-md transition-all duration-300 `}
            >
              <li>page 1</li>
              <li>page 2</li>
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
