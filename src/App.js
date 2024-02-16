import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Sideboard from './components/Sideboard';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Background />
        <Navbar />
        <Sideboard />
        <AnimatedRoutes />
      </ScrollToTop>
    </Router>
  );
}

export default App;
