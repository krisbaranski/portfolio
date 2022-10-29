import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Background from './components/Background';
import Navbar from './components/Navbar';
import Header from './components/Header';
import { Aboutme } from './components/Aboutme';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Background />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Header} />
          <Route path="/about" component={Aboutme} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </ScrollToTop>
    </Router>
  );
}

export default App;
