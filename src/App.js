import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import usePageSEO from './hooks/usePageSEO';

import ScrollToTop from './components/ScrollToTop';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Sideboard from './components/Sideboard';
import AnimatedRoutes from './components/AnimatedRoutes';
import Footer from './components/Footer';

function App() {
  usePageSEO({
    title: 'Kris Baranski | Web developer',
    description:
      'I specialize in frontend web development with focus on building responsive web applications and designing exceptional digital experiences.',
    keywords: [
      'portfolio',
      'frontend',
      'web',
      'development',
      'react',
      'UX/UI',
      'framer-motion',
      'Java Script',
      'Tailwind',
    ],
    ogTitle: 'Kris Baranski | Web developer',
    ogDescription:
      'I specialize in frontend web development with focus on building responsive web applications and designing exceptional digital experiences.',
    ogImage:
      'https://www.krisbaranski.com/static/media/portrait.b27d02955d8b412c45d5.jpg',
    ogUrl: 'https://krisbaranski.com/',
  });
  return (
    <Router>
      <ScrollToTop>
        <Background />
        <Navbar />
        <Sideboard />
        <AnimatedRoutes />
        <Footer />
      </ScrollToTop>
    </Router>
  );
}

export default App;
