import React from 'react';
import mobileImages from '../assets/home/mobile';
import tabletImages from '../assets/home/tablet';
import desktopImages from '../assets/home/desktop';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const MiddleImage = () => {
  return (
    <section className="img-section middle-image">
      <div className="img-section__container ">
        <img
          src={mobileImages.smallTeam}
          className="mobile-img"
          alt="home-img"
        />
        <img
          src={tabletImages.smallTeam}
          className="tablet-img"
          alt="home-img"
        />
        <img
          src={desktopImages.smallTeam}
          className="desktop-img"
          alt="home-img"
        />
        <h2>Small team, big ideas</h2>
        <Link className="button" to="/about">
          about us
          <BsArrowRight className="button__arrow" />
        </Link>
      </div>
    </section>
  );
};

export default MiddleImage;
