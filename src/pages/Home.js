import React from 'react';
import mobileImages from '../assets/home/mobile';
import featuredImages from '../assets/portfolio/mobile';
import { BsArrowRight } from 'react-icons/bs';

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
      <img src={mobileImages.paramour} alt="bg-img" />
      <h1>Project Paramour</h1>
      <p>
        Project made for an art museum near Southwest London. Project Paramour
        is a statement of bold, modern architecture.
      </p>
      <button className="button">
        see our portfolio
        <BsArrowRight className="button__arrow" />
      </button>
    </section>
  );
};

const WelcomeHome = () => {
  return (
    <section className="section-center">
      <h2>Welcome to Arch Studio</h2>
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
      <img src={mobileImages.smallTeam} alt="bg-img" />
      <h1>Small teal big ideas</h1>
      <button className="button">
        about us
        <BsArrowRight className="button__arrow" />
      </button>
    </section>
  );
};

const Featured = () => {
  return (
    <section className="section-center">
      <h2>Featured</h2>
      <div className="section-center__image-container">
        <article className="section-center__featured-image">
          <img src={featuredImages.delSol} alt="featured-img" />
          <h3>project del sol</h3>
          <p>view all projects</p>
        </article>
        <article className="section-center__featured-image">
          <img src={featuredImages.image228b} alt="featured-img" />
          <h3>228B tower</h3>
          <p>view all projects</p>
        </article>
        <article className="section-center__featured-image">
          <img src={featuredImages.prot} alt="featured-img" />
          <h3>le prototype</h3>
          <p>view all projects</p>
        </article>
        <button className="button">
          about us
          <BsArrowRight className="button__arrow" />
        </button>
      </div>
    </section>
  );
};
export default Home;
