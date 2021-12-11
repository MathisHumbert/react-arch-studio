import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { useGlobalContext } from '../context';

const Form = () => {
  const {
    name,
    email,
    message,
    handelForm,
    handleEmail,
    handleName,
    handleMessage,
    nameError,
    emailError,
    messageError,
  } = useGlobalContext();

  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <h2 className="form__title">
        Connect <br /> with us
      </h2>
      <div className="form__container">
        <div className="input-container">
          <input
            type="text"
            className={`form__input_text ${nameError && `error`}`}
            placeholder="Name"
            value={name}
            onChange={handleName}
          />
          {nameError && <span className="error-msg">Can't be empty</span>}
        </div>
        <div className="input-container">
          <input
            type="email"
            className={`form__input_text ${emailError && `error`}`}
            placeholder="Email"
            value={email}
            onChange={handleEmail}
          />
          {emailError && <span className="error-msg">Can't be empty</span>}
        </div>
        <div className="input-container">
          <textarea
            className={`form__input_text ${messageError && `error`}`}
            placeholder="Message"
            value={message}
            onChange={handleMessage}
            style={{ resize: 'none' }}
          ></textarea>
          {messageError && <span className="error-msg">Can't be empty</span>}
        </div>

        <button type="submit" className="form__submit" onClick={handelForm}>
          <BsArrowRight className="icon" />
        </button>
      </div>
    </form>
  );
};

export default Form;
