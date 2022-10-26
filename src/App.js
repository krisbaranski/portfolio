import React from 'react';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Background from './components/Background';
import Menu from './components/Menu';
import { Sideboard } from './components/Sideboard';
import Header from './components/Header';
import { Aboutme } from './components/Aboutme';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="container">
        <Background />
        <Menu />
        <Sideboard />
        <Header />
        <Aboutme />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
