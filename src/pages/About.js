import React from 'react';
import HeaderInfo from '../components/HeaderInfo';
import LeadersInfo from '../components/LeadersInfo';
import { aboutHeaderData } from '../utils/data';

const About = () => {
  return (
    <main className="main-about">
      <HeaderInfo {...aboutHeaderData} />
      <section className="about-section hr-section">
        <hr />
        <h2>
          Our <br /> Heritage
        </h2>
        <div className="about-section__text">
          <p>
            Founded in 2007, we started as a trio of architects. Our
            complimentary skills and relentless attention to detail turned Arch
            into one of the most sought after boutique firms in the country.
          </p>
          <p>
            Speciliazing in Urban Design allowed us to focus on creating
            exceptional structures that live in harmony with their surroundings.
            We consider every detail from every surrounding element to inform
            our designs.
          </p>
          <p>
            Our small team of world-class professionals provides input on every
            project.
          </p>
        </div>
      </section>
      <LeadersInfo />
    </main>
  );
};

export default About;
