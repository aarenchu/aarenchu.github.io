import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import About from './components/pages/About';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';

interface ResumeData {
  main: any;
  resume: any;
  portfolio: any;
}

const App: React.FC = () => {
  const [visibleSection, setVisibleSection] = useState('home');
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch('/data/resumeData.json');
        const data = await res.json();
        setResumeData(data);
        setLoading(false);
      } catch (err) {
        console.error('Failed to load resume data:', err);
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading || !resumeData) {
    return (
      <div className='App' style={{ padding: '40px', textAlign: 'center' }}>
        Loading...
      </div>
    );
  }

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
