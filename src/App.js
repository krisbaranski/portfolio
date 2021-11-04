import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import { Aboutme } from './components/Aboutme';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Aboutme />
        <Projects />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
