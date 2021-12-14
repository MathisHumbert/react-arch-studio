import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioComponent = ({ data }) => {
  return (
    <>
      {data.map((item, index) => {
        const { img, title, date, link } = item;
        return (
          <article className="portfolio-container__article" key={index}>
            <img src={img.mobile} alt="portfolio-img" className="mobile-img" />
            <img src={img.tablet} alt="portfolio-img" className="tablet-img" />
            <img
              src={img.desktop}
              alt="portfolio-img"
              className="desktop-img"
            />
            <h3>{title}</h3>
            {date && <p>{date}</p>}
            {link && <Link to="/portfolio">view all projects</Link>}
          </article>
        );
      })}
    </>
  );
};
export default PortfolioComponent;
