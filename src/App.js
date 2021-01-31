import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import Sidebar from './components/Sidebar';
import react, {useState} from 'react';

import ProjectsSection from './components/ProjectsSection/Index';
const App = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <div className='App'>
        <Navbar toggle={toggle} />
        <Sidebar toggle={toggle} isOpen={isOpen} />
        {/*       <Footer />
         */}{' '}
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </div>
    </Router>
  );
};

export default App;
