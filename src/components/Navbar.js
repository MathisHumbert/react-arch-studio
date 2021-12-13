import React from 'react';
import logo from '../assets/logo.svg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { useGlobalContext } from '../context';

const Navbar = () => {
  const location = useLocation().pathname.split('/')[1];

  const { isSidebarOpen, openSidebar, closeSidebar } = useGlobalContext();
  return (
    <nav className="nav">
      <div className="nav__center">
        <Link to="/">
          <img src={logo} alt="company-logo" className="nav__img" />
        </Link>
        {isSidebarOpen ? (
          <FaTimes className="nav__x" onClick={closeSidebar} />
        ) : (
          <GiHamburgerMenu className="nav__hamburger" onClick={openSidebar} />
        )}
        <ul className="nav__links">
          <li
            className={
              location === 'portfolio' ? 'active nav__link' : 'nav__link'
            }
          >
            <Link to="/portfolio">Portfolio</Link>
            <div className="nav__border"></div>
          </li>
          <li
            className={location === 'about' ? 'active nav__link' : 'nav__link'}
          >
            <Link to="/about">About Us</Link>
            <div className="nav__border"></div>
          </li>
          <li
            className={
              location === 'contact' ? 'active nav__link' : 'nav__link'
            }
          >
            <Link to="/contact">Contact</Link>
            <div className="nav__border"></div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
