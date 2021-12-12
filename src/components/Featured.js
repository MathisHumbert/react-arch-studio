import React from 'react';
import PortfolioComponent from '../components/PortfolioComponent';
import { featuredData } from '../utils/data';

const Featured = () => {
  return (
    <section className="featured-section">
      <h2>Featured</h2>
      <div className="portfolio-container">
        <PortfolioComponent data={featuredData} />
      </div>
    </section>
  );
};

export default Featured;
