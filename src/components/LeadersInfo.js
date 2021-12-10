import React from 'react';
import { aboutLeaderData } from '../utils/data';
import { BsLinkedin, BsTwitter } from 'react-icons/bs';

const LeadersInfo = () => {
  return (
    <section className="leaders-section">
      <h2>
        The <br />
        Leaders
      </h2>
      <div className="leaders-section__container">
        {aboutLeaderData.map((leader, index) => {
          const { img, name, job } = leader;
          return (
            <article key={index}>
              <img src={img} alt={name} />
              <h3>{name}</h3>
              <p>{job}</p>
              <div className="leader-section__icons">
                <BsLinkedin className="icon" />
                <BsTwitter className="icon" />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default LeadersInfo;
