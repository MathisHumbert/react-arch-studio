import React from 'react';
import mobileImages from '../assets/home/mobile';
import tabletImages from '../assets/home/tablet';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const MiddleImage = () => {
  return (
    <section className="img-section middle-image">
      <div className="img-section__container ">
        <img src={mobileImages.smallTeam} className="mobile-img" />
        <img src={tabletImages.smallTeam} className="tablet-img" />
        <h1>Small team, big ideas</h1>
        <Link className="button" to="/about">
          about us
          <BsArrowRight className="button__arrow" />
        </Link>
      </div>
    </section>
  );
};

export default MiddleImage;
