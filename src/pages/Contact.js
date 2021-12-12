import React from 'react';
import { HeaderInfo, Leaflet, Form } from '../components';
import { contactHeaderData } from '../utils/data';
import { BsArrowRight } from 'react-icons/bs';
import { useGlobalContext } from '../context';

const Contact = () => {
  const { setAtlanta, setDallas } = useGlobalContext();
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
            <p>Address : Atlanta</p>
            <p>Phone : 123-456-3451</p>
          </div>
          <span onClick={setAtlanta}>
            View on Map <BsArrowRight className="map-icon" />
          </span>
        </article>
        <article className="contact-section__office">
          <p>Office II</p>
          <div className="contact-section__text">
            <p>Mail : archtwo@mail.com</p>
            <p>Address : Dallas</p>
            <p>Phone : 832-123-4321</p>
          </div>
          <span onClick={setDallas}>
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
