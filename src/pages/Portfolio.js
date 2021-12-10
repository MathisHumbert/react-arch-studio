import React from 'react';
import { portfolioData } from '../utils/data';

const Portfolio = () => {
  return (
    <main className="main-portfolio">
      {portfolioData.map((item, index) => {
        const { img, title, date } = item;
        return (
          <article className="main-portfolio__project" key={index}>
            <img src={img.mobile} alt="portfolio-image" />
            <h3>{title}</h3>
            <p>{date}</p>
          </article>
        );
      })}
    </main>
  );
};

export default Portfolio;
