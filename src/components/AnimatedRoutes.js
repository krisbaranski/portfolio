import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Header from './Header';
import About from './Aboutme';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" exact element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer />} />
        {/* <Route path="/privacypolicy" element={<PrivacyPolicy />} /> */}
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
