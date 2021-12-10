import React from 'react';
import PortfolioComponent from '../components/PortfolioComponent';
import { portfolioData } from '../utils/data';

const Portfolio = () => {
  return (
    <main className="portfolio-container main-portfolio">
      <PortfolioComponent data={portfolioData} />
    </main>
  );
};

export default Portfolio;
