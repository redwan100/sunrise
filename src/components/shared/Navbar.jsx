import { useEffect, useState } from "react";
import { IoCall } from "react-icons/io5";
import { MdEmail, MdOutlineLocationCity } from "react-icons/md";
import { TiArrowSortedDown } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpeg";
import Container from "./Container";
const navbar = [
  {
    title: "home",
    path: "/",
  },
  {
    title: "about us",
    path: "/about",
    children: [
      {
        title: "page 1",
        path: "/page1",
      },
      {
        title: "page 2",
        path: "/page2",
      },
      {
        title: "page 1",
        path: "/page1",
      },
      {
        title: "page 2",
        path: "/page2",
      },
      {
        title: "page 1",
        path: "/page1",
      },
      {
        title: "page 2",
        path: "/page2",
      },
    ],
  },
  {
    title: "about us",
    path: "/about",
    children: [
      {
        title: "page 1",
        path: "/page1",
      },
      {
        title: "page 2",
        path: "/page2",
      },
    ],
  },
  {
    title: "about us",
    path: "/about",
    children: [
      {
        title: "page 1",
        path: "/page1",
      },
      {
        title: "page 2",
        path: "/page2",
      },
    ],
  },
  {
    title: "about us",
    path: "/about",
    children: [
      {
        title: "page 1",
        path: "/page1",
      },
      {
        title: "page 2",
        path: "/page2",
      },
    ],
  },
  {
    title: "about us",
    path: "/about",
    children: [
      {
        title: "page 1",
        path: "/page1",
      },
      {
        title: "page 2",
        path: "/page2",
      },
    ],
  },
];

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
          <div className=" flex items-center gap-8 text-lg p-3 justify-center">
            <img src={logo} alt="logo" className="size-14" />

            <div className="flex items-center gap-3">
              {navbar.map((nav) => (
                <div key={nav} className="relative">
                  <div className="relative group">
                    <NavLink to={nav.path} className="flex items-center">
                      <span className="capitalize font-medium hover:text-[#22c55e]">
                        {nav.title}
                      </span>
                      {nav?.children && (
                        <TiArrowSortedDown className="inline-block text-gray-600" />
                      )}
                    </NavLink>
                    {nav?.children && (
                      <div
                        className=" hidden absolute top-6 transition-all duration-300 -right-5 shadow-md z-20 bg-white
                       text-gray-600 min-w-[5rem] w-fit rounded-md group-hover:flex flex-col items-center overflow-hidden "
                      >
                        {nav?.children?.map((child) => (
                          <NavLink
                            key={child}
                            to={child.path}
                            className="hover:bg-slate-500 hover:text-white transition-all py-1 px-3  w-full border-b-2"
                          >
                            {child.title}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
