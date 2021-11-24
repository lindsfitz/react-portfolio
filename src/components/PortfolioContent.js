import React, { useState } from 'react';
import Header from './Header'
import Footer from './Footer';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio';

export default function PortfolioContent() {
    const [currentSection, setCurrentSection] = useState('AboutMe');

    const renderSection = () => {
        if (currentSection === 'AboutMe') {
            return <AboutMe />
        }
        if (currentSection === 'Portfolio') {
            return <Portfolio />
        }
        if (currentSection === 'Contact') {
            return <Contact />
        }
    }

    const handleSectionChange = (section) => setCurrentSection(section);

  return (
    <div>
      <Header currentSection={currentSection} handleSectionChange={handleSectionChange} />
      <main>
      {renderSection()}
      <Footer />
      </main>
    </div>
  );
}