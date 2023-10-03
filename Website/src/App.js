import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroPage from './components/HeroPage';
// import About from './components/About';
import TechnicalEvent from './components/TechnicalEvent';
import FunEvent from './components/FunEvent';
import CulturalEvent from './components/CulturalEvent';
import Developers from './components/Developers';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroPage />
      {/* <About /> */}
      <TechnicalEvent />
      <FunEvent />
      <CulturalEvent />
      <Developers />
    </div>
  );
}

export default App;