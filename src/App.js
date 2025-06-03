import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Listings from './components/Listings';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Partners from './components/Partners';
import AgentsSection from './components/AgentsSection';

const App = () => {
  return (
    <>
      <Header />
      <main className="pt-20 scroll-smooth">
        <Hero />
        <Listings />
        <About />
        <Partners />
        <Contact />
        <AgentsSection />
      </main>
      <Footer />
    </>
  );
};

export default App;
