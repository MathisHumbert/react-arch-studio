import React from 'react';
import PortfolioComponent from '../components/PortfolioComponent';
import { featuredData } from '../utils/data';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const Featured = () => {
  return (
    <section className="featured-section">
      <div className="featured-section__title">
        <h2>Featured</h2>
        <Link className="button" to="/portfolio">
          see all
          <BsArrowRight className="button__arrow" />
        </Link>
      </div>

      <div className="portfolio-container">
        <PortfolioComponent data={featuredData} />
      </div>
    </section>
  );
};

export default Featured;
