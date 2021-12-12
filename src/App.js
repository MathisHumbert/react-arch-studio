import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About, Contact, Home, Portfolio } from './pages';
import { Footer, Navbar, Sidebar } from './components';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
