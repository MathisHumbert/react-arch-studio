import React from 'react';
import logo from '../assets/logo.svg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

const Navbar = () => {
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
          <li className="nav__link">
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className="nav__link">
            <Link to="/about">About Us</Link>
          </li>
          <li className="nav__link">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
