import React from 'react';
import PortfolioComponent from '../components/PortfolioComponent';
import { featuredData } from '../utils/data';
import mobileImages from '../assets/home/mobile';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="main-home">
      <HeaderImage />
      <WelcomeHome />
      <MiddleImage />
      <Featured />
    </main>
  );
};

const HeaderImage = () => {
  return (
    <section className="img-section">
      <div className="img-section__container">
        <img src={mobileImages.paramour} />
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

const WelcomeHome = () => {
  return (
    <section className="section-center">
      <div className="section-center__border-top"></div>
      <h2 className="section-center__title">Welcome to Arch Studio</h2>
      <div className="section-center__text-container">
        <p>
          We have a unique network and skillset to help bring your projects to
          life. Our small team of highly skilled individuals combined with our
          large network put us in a strong position to deliver exceptional
          results.
        </p>
        <p>
          Over the past 10 years, we have worked on all kinds of projects. From
          stations to high-rise buildings, we create spaces that inspire and
          delight.
        </p>
        <p>
          We work closely with our clients so that we understand the intricacies
          of each project. This allows us to work in harmony the surrounding
          area to create truly stunning projects that will stand the test of
          time.
        </p>
      </div>
    </section>
  );
};

const MiddleImage = () => {
  return (
    <section className="img-section">
      <div className="img-section__container">
        <img src={mobileImages.smallTeam} />
        <h1>Small teal big ideas</h1>
        <Link className="button" to="/about">
          about us
          <BsArrowRight className="button__arrow" />
        </Link>
      </div>
    </section>
  );
};

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
export default Home;
