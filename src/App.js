import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useScrollAnimation from './hooks/useScrollAnimation';

function App() {
  useScrollAnimation();
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;