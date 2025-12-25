import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import CustomCursor from './components/CustomCursor/CustomCursor';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';
import analytics from './utils/analytics';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize analytics with your Google Analytics 4 Measurement ID
    // Replace 'G-XXXXXXXXXX' with your actual GA4 Measurement ID
    // analytics.init('G-XXXXXXXXXX');
    
    // Track initial page load
    analytics.pageView(window.location.pathname);
  }, []);

  return (
    <ErrorBoundary>
      <div className="App">
        <ScrollProgress />
        <CustomCursor />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default App;
