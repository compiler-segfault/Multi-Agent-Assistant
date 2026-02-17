import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ChatWindow from './components/ChatWindow';
import Background from './components/Background';
import Requirements from './components/Requirements';
import CoreTechnologies from './components/CoreTechnologies';
import InnovationPoints from './components/InnovationPoints';
import FutureDirections from './components/FutureDirections';
import DesignDiagram from './components/DesignDiagram';
import WorkingPrinciple from './components/WorkingPrinciple';
import Inspirations from './components/Inspirations';
import Footer from './components/Footer';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const scrollToContent = () => {
    document.getElementById('background').scrollIntoView({ behavior: 'smooth' });
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="min-h-screen bg-light">
      {/* Navbar */}
      <Navbar toggleChat={toggleChat} />

      {/* Hero Section */}
      <Hero scrollToContent={scrollToContent} />

      {/* Background and Significance */}
      <Background />

      {/* Requirements Analysis */}
      <Requirements />

      {/* Core Technologies */}
      <CoreTechnologies />

      {/* Innovation Points */}
      <InnovationPoints />

      {/* Future Directions */}
      <FutureDirections />

      {/* Design Diagram */}
      <DesignDiagram />

      {/* Working Principle and Verification */}
      <WorkingPrinciple />

      {/* Inspiration Sources */}
      <Inspirations />

      {/* Footer */}
      <Footer />

      {/* Chat Window */}
      <ChatWindow isOpen={isChatOpen} onClose={toggleChat} />
    </div>
  );
}

export default App;
