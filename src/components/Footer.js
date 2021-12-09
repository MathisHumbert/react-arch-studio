import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { BsArrowRight } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <span className="footer__logo">
          <img src={logo} alt="footer-logo" />
        </span>
        <div className="footer__links">
          <Link to="">portfolio</Link>
          <Link to="">about us</Link>
          <Link to="">contact</Link>
        </div>
        <button className="button">
          see our portfolio
          <BsArrowRight className="button__arrow" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
