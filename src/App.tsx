import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Speakers from './components/Speakers';
import Registration from './components/Registration';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';


function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Events />
      <Speakers />
      <Registration />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;