import React from 'react';
import mobileImages from '../assets/home/mobile';
import tabletImages from '../assets/home/tablet';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const HeaderImage = () => {
  return (
    <section className="img-section header-images">
      <div className="img-section__container">
        <img src={mobileImages.paramour} className="mobile-img" />
        <img src={tabletImages.paramour} className="tablet-img" />
        <h1>Project Paramour</h1>
        <p>
          Project made for an art museum near Southwest London. Project Paramour
          is a statement of bold, modern architecture.
        </p>
        <Link className="button" to="/portfolio">
          see our portfolio
          <BsArrowRight className="button__arrow" />
        </Link>
      </div>
    </section>
  );
};

export default HeaderImage;
