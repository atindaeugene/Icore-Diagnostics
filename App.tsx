
import React, { useState, useEffect } from 'react';
import { BranchId, BranchInfo } from './types';
import { BRANCHES } from './constants';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Locations from './components/Locations';
import TestResults from './components/TestResults';
import About from './components/About';
import VoiceAssistant from './components/VoiceAssistant';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [selectedBranch, setSelectedBranch] = useState<BranchId>(BranchId.ATHI_RIVER);
  const currentBranch = BRANCHES[selectedBranch];

  const handleBranchChange = (id: BranchId) => {
    setSelectedBranch(id);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 scroll-smooth">
      <Navbar 
        currentBranch={currentBranch} 
        onBranchChange={handleBranchChange} 
      />
      
      <main>
        <section id="home">
          <Hero currentBranch={currentBranch} />
        </section>

        <section id="services" className="py-20 bg-white">
          <Services />
        </section>

        <section id="results" className="py-20 bg-slate-100">
          <TestResults />
        </section>

        <section id="about" className="py-20 bg-white">
          <About />
        </section>

        <section id="locations" className="py-20 bg-slate-50">
          <Locations currentBranch={currentBranch} onBranchChange={handleBranchChange} />
        </section>
      </main>

      <Footer currentBranch={currentBranch} />

      {/* Persistent Voice Assistant Floating Button */}
      <VoiceAssistant />
    </div>
  );
};

export default App;
