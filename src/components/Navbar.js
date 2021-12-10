import React from 'react';
import logo from '../assets/logo.svg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__center">
        <Link to="/">
          <img src={logo} alt="company-logo" className="nav__img" />
        </Link>
        <GiHamburgerMenu className="nav__hamburger" />
      </div>
    </nav>
  );
};

export default Navbar;
