import React from 'react';
import DesktopNavbar from './navbar/DesktopNavbar';
import MobileMenu from './navbar/MobileMenu';

const Navbar = () => {
  return (
    <>
      <div className="pb-18">
        <DesktopNavbar />

        <MobileMenu />
      </div>
    </>
  );
};

export default Navbar;
