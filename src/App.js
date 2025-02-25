import React from 'react';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Introduction from './components/Introduction';
import Team from './components/Team';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar />
      <div className="pt-16">
        <Portfolio />
        <Introduction />
        <Team />
        <AboutUs />
      </div>
    </div>
  );
}

export default App;
