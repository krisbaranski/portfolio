import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Header from './Header';
import About from './Aboutme';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Impressum from './Impressum';
import PrivacyPolicy from './PrivacyPolicy';

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
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/policy" element={<PrivacyPolicy />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
