import React from 'react';
import {
  HeaderImage,
  WelcomeHome,
  MiddleImage,
  Featured,
  SliderImg,
} from '../components';

const Home = () => {
  return (
    <main className="main-home">
      <SliderImg />
      <HeaderImage />
      <WelcomeHome />
      <MiddleImage />
      <Featured />
    </main>
  );
};

export default Home;
