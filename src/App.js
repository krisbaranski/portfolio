import React from 'react';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './components/Menu';
import Header from './components/Header';
import { Aboutme } from './components/Aboutme';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="container">
        <Menu />
        <Header />
        <Aboutme />
        <Projects />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
