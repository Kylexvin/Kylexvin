import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CategoryPage from './pages/CategoryPage';
import CaseStudy from './pages/CaseStudy';
import useScrollAnimation from './hooks/useScrollAnimation';

function App() {
  useScrollAnimation();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Services />
            <Experience />
            <Contact />
          </>
        } />
        <Route path="/projects/:category" element={<CategoryPage />} />
        <Route path="/projects/:category/:id" element={<CaseStudy />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;