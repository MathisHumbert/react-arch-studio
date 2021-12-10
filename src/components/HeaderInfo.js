import React from 'react';

const HeaderInfo = ({ img, title, text }) => {
  return (
    <header className="header-info">
      <div className="header-info__img">
        <img src={img.mobile} alt="about-mobile-img" />
      </div>
      <div className="header-info__text">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </header>
  );
};

export default HeaderInfo;
