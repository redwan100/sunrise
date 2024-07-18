import React, { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { CgMenuRight } from 'react-icons/cg';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Container from '../Container';

import logo from '../../../assets/logo.png';
import DonationBtn from '../buttons/DonationBtn';

const navItems = [
  {
    name: 'home',
    path: '/'
  },
  {
    name: 'who we are',
    submenu: [
      { name: 'contact', path: '/contact' },
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

const MobileMenu = () => {
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  const closeAllSubmenus = () => {
    showMenuBar();
    setOpenSubmenu(null);
  };

  const showMenuBar = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="fixed w-full top-0 left-0 bg-white z-[100] md:hidden">
      <Container>
        <div className="flex items-center justify-between py-2 px-2">
          <Link to={'/'}>
            <img src={logo} alt="logo" className="w-20" />
          </Link>
          <p>
            <CgMenuRight className="text-2xl cursor-pointer" onClick={showMenuBar} />
          </p>
        </div>
      </Container>
      <div
        className={`bg-gray-800/80 backdrop-blur-lg text-white w-full min-h-screen fixed top-0 right-0 z-50 transition-all   ${showMenu ? 'translate-x-0' : 'translate-x-[120%]'}`}>
        <div className="container mx-auto px-4 grid place-content-center min-h-screen space-y-4">
          <span
            className="absolute top-3 right-5 text-white transition hover:text-red-500 text-2xl cursor-pointer"
            onClick={showMenuBar}>
            <IoIosCloseCircleOutline />
          </span>
          {navItems.map((item, index) => (
            <div key={index}>
              {item.submenu ? (
                <div className="text-left">
                  <button
                    className=" py-2 px-4 text-lg flex items-center uppercase hover:bg-slate-50 hover:text-gray-900 transition"
                    onClick={() => handleMenuClick(index)}>
                    {item.name} <BiChevronDown />
                  </button>
                  {openSubmenu === index && (
                    <div className=" bg-slate-400 text-gray-800 ml-5 rounded-md">
                      {item.submenu.map((submenuItem, subIndex) => (
                        <Link
                          onClick={showMenuBar}
                          key={subIndex}
                          to={submenuItem.path}
                          className="block py-2 px-4 text-sm hover:text-gray-50 font-semibold transition">
                          {submenuItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={item.path}
                  className="block py-2 px-4 w-max text-lg uppercase hover:bg-slate-50 hover:text-gray-900 transition"
                  onClick={closeAllSubmenus}>
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <button className="">
            <Link to={'/donation-details'}>
              <DonationBtn text="donation" className={'py-[6px] text-base w-max ml-4'} />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
