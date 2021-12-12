import React from 'react';
import { HeaderImage, WelcomeHome, MiddleImage, Featured } from '../components';

const Home = () => {
  return (
    <main className="main-home">
      <HeaderImage />
      <WelcomeHome />
      <MiddleImage />
      <Featured />
    </main>
  );
};

export default Home;
