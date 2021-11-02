import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Route path="/" exact component={Projects} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
