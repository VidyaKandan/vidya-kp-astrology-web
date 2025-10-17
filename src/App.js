import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Services from './components/Services';
import Payment from './components/Payment';
import FAQ from './components/FAQ';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Payment />
      <Contact />
      <FAQ />
      <About />
      <Footer />
    </div>
  );
}

export default App;
