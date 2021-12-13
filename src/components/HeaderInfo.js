import React from 'react';

const HeaderInfo = ({ img, title, text, bigTitle }) => {
  console.log(img);
  console.log(bigTitle);
  return (
    <header className="header-info">
      <div className="header-info__img">
        <img src={img.mobile} alt="about-mobile-img" className="mobile-img" />
        <img src={img.tablet} alt="about-mobile-img" className="tablet-img" />
      </div>
      <div className="header-info__text">
        <h1 className="big">{bigTitle}</h1>
        <hr />
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </header>
  );
};

export default HeaderInfo;
