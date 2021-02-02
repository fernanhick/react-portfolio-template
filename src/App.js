import {useState} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import {Divider} from './components/Divider';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import ProjectsSection from './components/ProjectsSection/Index';
import Sidebar from './components/Sidebar';

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
        <HeroSection />
        <AboutSection />
        <Divider />
        <ProjectsSection />
        <Divider />
        <ContactSection />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
