import React, { useEffect, useState } from 'react';
import { BiChevronDown, BiDonateHeart } from 'react-icons/bi';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import Container from '../Container';

import { IoCall } from 'react-icons/io5';
import { MdEmail, MdOutlineLocationCity } from 'react-icons/md';

const navItems = [
  {
    name: 'home',
    path: '/'
  },
  {
    name: 'who we are',
    submenu: [
      { name: 'Social Development', path: '/social-development' },
      { name: 'Social Enterprise', path: '/social-enterprise' }
    ]
  },
  {
    name: 'what we do',
    path: '/whate-we-do',
    submenu: [
      { name: 'Social Development', path: '/social-development' },
      { name: 'Social Enterprise', path: '/social-enterprise' }
    ]
  },
  {
    name: 'contact',
    path: '/contact'
  }
];

const DesktopNavbar = () => {
  const [scrolling, setScrolling] = useState(false);

  const isActiveLink = (path) => {
    return window.location.pathname === path;
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setScrolling(true);
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
    <>
      {/* ---- topbar ---- */}

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
      {/* ---- topbar ---- */}

      <div
        className={`w-full py-1 transition-all duration-500 hidden md:block ${
          scrolling
            ? 'fixed top-0  left-0 z-50 bg-gradient-to-bl to-pink-50 from-amber-100 shadow-lg'
            : 'bg-white'
        }`}>
        <Container>
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Sunrise Logo" className=" w-20" />
            </Link>
            <ul className="flex items-center space-x-4 ">
              {navItems.map((item, index) => (
                <li key={index} className="relative group">
                  {item.submenu ? (
                    <>
                      <button
                        className={`text-gray-800 hover:text-green-500 focus:outline-none capitalize font-medium text-base flex items-center ${isActiveLink(item.path) ? 'text-green-500' : ''}`}>
                        {item.name} <BiChevronDown />
                      </button>

                      <ul className="absolute bg-white border-2 border-slate-100 py-2 px-4 rounded shadow-lg min-w-max translate-y-5 invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition divide-y-2 divide-dashed z-50">
                        {item.submenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              to={subItem.path}
                              className="block py-1 hover:text-green-500 transition-all font-medium text-[15px]">
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <NavLink
                      to={item.path}
                      className="text-gray-800 hover:text-green-500 focus:outline-none capitalize font-medium text-base"
                      activeClassName="text-green-500">
                      {item.name}
                    </NavLink>
                  )}
                </li>
              ))}

              <button className="">
                <Link
                  to={'/donation-details'}
                  className="flex items-center gap-1 bg-green-500 text-white py-1 px-2 rounded-md font-medium ">
                  Donation <BiDonateHeart />
                </Link>
              </button>
            </ul>
          </div>
        </Container>
      </div>
    </>
  );
};

export default DesktopNavbar;
