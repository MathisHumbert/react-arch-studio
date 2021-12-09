import React from 'react';
import logo from '../assets/logo.svg';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__container">
        <img src={logo} alt="company-logo" className="nav__img" />
        <GiHamburgerMenu className="nav__hamburger" />
      </div>
    </nav>
  );
};

export default Navbar;
