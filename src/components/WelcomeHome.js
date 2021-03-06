import React from 'react';
import sideImage from '../assets/home/desktop/image-welcome.jpg';

const WelcomeHome = () => {
  return (
    <section className="section-center">
      <div className="section-center__text">
        <hr />
        <h1 className="big">Welcome</h1>
        <h2 className="section-center__title">Welcome to Arch Studio</h2>
        <div className="section-center__text-container">
          <p>
            We have a unique network and skillset to help bring your projects to
            life. Our small team of highly skilled individuals combined with our
            large network put us in a strong position to deliver exceptional
            results.
          </p>
          <p>
            Over the past 10 years, we have worked on all kinds of projects.
            From stations to high-rise buildings, we create spaces that inspire
            and delight.
          </p>
          <p>
            We work closely with our clients so that we understand the
            intricacies of each project. This allows us to work in harmony the
            surrounding area to create truly stunning projects that will stand
            the test of time.
          </p>
        </div>
      </div>
      <div className="section-center__img">
        <img src={sideImage} alt="side-img" />
      </div>
    </section>
  );
};

export default WelcomeHome;
