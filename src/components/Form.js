import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const Form = () => {
  return (
    <form className="form">
      <h2 className="form__title">
        Connect <br /> with us
      </h2>
      <div className="form__container">
        <input
          type="text"
          name=""
          className="form__input_text"
          placeholder="Name"
        />
        <input
          type="email"
          name=""
          className="form__input_text"
          placeholder="Email"
        />
        <textarea
          name=""
          id=""
          className="form__input_textarea"
          placeholder="Message"
        ></textarea>
        <button type="submit" className="form__submit">
          <BsArrowRight className="icon" />
        </button>
      </div>
    </form>
  );
};

export default Form;
