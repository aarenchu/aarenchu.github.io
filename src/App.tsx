import React from 'react';
// import ReactGA from 'react-ga';
//import { BrowserRouter as Route } from 'react-router-dom';
import resumeData from './data/resumeData.json';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import About from './components/pages/About';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';

const App: React.FC = () => {
  // Google Analytics Module
  // ReactGA.initialize('UA-110570651-1');
  // ReactGA.pageview(window.location.pathname);

  return (
    <div className='App'>
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Resume data={resumeData.resume} />
      <Portfolio data={resumeData.portfolio} />
      <Contact data={resumeData.main} />
      <Footer data={resumeData.main} />
    </div>
  );
};

export default App;
