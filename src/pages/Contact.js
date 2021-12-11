import React from 'react';
import HeaderInfo from '../components/HeaderInfo';
import { contactHeaderData } from '../utils/data';
import { BsArrowRight } from 'react-icons/bs';
import Leaflet from '../components/Leaflet';
import Form from '../components/Form';

const Contact = () => {
  return (
    <main className="main-contact">
      <HeaderInfo {...contactHeaderData} />
      <section className="contact-section hr-section">
        <hr />
        <h2>
          Contact <br /> Details
        </h2>
        <article className="contact-section__office">
          <p>Main Office</p>
          <div className="contact-section__text">
            <p>Mail : archone@mail.com</p>
            <p>Address : 1892 Chenoweth Drive TN</p>
            <p>Phone : 123-456-3451</p>
          </div>
          <span>
            View on Map <BsArrowRight className="map-icon" />
          </span>
        </article>
        <article className="contact-section__office">
          <p>Office II</p>
          <div className="contact-section__text">
            <p>Mail : archtwo@mail.com</p>
            <p>Address : 3399 Wines Lane TX</p>
            <p>Phone : 832-123-4321</p>
          </div>
          <span>
            View on Map <BsArrowRight className="map-icon" />
          </span>
        </article>
      </section>
      <Leaflet />
      <Form />
    </main>
  );
};

export default Contact;