import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Background from './components/Background';
import Navbar from './components/Navbar';
import Header from './components/Header';
import { Aboutme } from './components/Aboutme';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="max-w4xl">
        <Background />
        <Navbar />
        <Header />
        <Aboutme />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
