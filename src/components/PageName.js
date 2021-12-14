import React from 'react';
import { useLocation } from 'react-router-dom';

const PageName = () => {
  let location = useLocation().pathname.split('/')[1];
  if (location === 'about') {
    location = 'about us';
  }
  if (!location) {
    location = 'home';
  }
  console.log(location);

  return (
    <div className="page-name">
      <hr />
      <p>{location}</p>
    </div>
  );
};

export default PageName;
