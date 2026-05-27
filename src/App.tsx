import React, { useState } from 'react';
import resumeData from './data/resumeData.json';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import About from './components/pages/About';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';

const App: React.FC = () => {
  const [visibleSection, setVisibleSection] = useState('home');

  return (
    <div className='App'>
      <Header
        data={resumeData.main}
        visibleSection={visibleSection}
        setVisibleSection={setVisibleSection}
      />
      <About data={resumeData.main} setVisibleSection={setVisibleSection} />
      <Resume data={resumeData.resume} setVisibleSection={setVisibleSection} />
      <Portfolio
        data={resumeData.portfolio}
        setVisibleSection={setVisibleSection}
      />
      <Contact data={resumeData.main} setVisibleSection={setVisibleSection} />
      <Footer data={resumeData.main} />
    </div>
  );
};

export default App;
