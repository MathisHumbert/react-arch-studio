import React from 'react';

const HeaderInfo = ({ img, title, text, bigTitle }) => {
  return (
    <header className="header-info">
      <div className="header-info__img">
        <img src={img.mobile} alt="about-img" className="mobile-img" />
        <img src={img.tablet} alt="about-img" className="tablet-img" />
        <img src={img.desktop} alt="about-img" className="desktop-img" />
      </div>
      <div className="header-info__text">
        <div className="header-info__text-container">
          <h1 className="big">{bigTitle}</h1>
          <hr />
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </div>
    </header>
  );
};

export default HeaderInfo;
