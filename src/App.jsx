import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Header scroll effect
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section detection
      const sections = ['home', 'coming-soon'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="App">
      {/* Header with dynamic background */}
      <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <div className="logo">
            <h1>INZOZI <span>Partners</span></h1>
          </div>
          
          <nav className={`main-nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul>
              <li>
                <a 
                  href="#home" 
                  className={activeSection === 'home' ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('home');
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#coming-soon" 
                  className={activeSection === 'coming-soon' ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('coming-soon');
                  }}
                >
                  Coming Soon
                </a>
              </li>
            </ul>
          </nav>
          
          <button className="quote-btn">Get a Quote</button>
          
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Hero Section with solid background - Reduced height */}
      <section id="home" className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Strategic Growth Partners for African Enterprises</h1>
            <p className="hero-subtitle">Driving sustainable business transformation through innovative consulting solutions tailored for the African market</p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section id="coming-soon" className="coming-soon-section">
        <div className="container">
          <div className="coming-soon-content">
            <p className="making-changes-text">We are making some changes</p>
            <h2 className="coming-soon-text">Coming Soon</h2>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <img src="/icons/discord.svg" alt="Discord" />
              </a>
              <a href="#" className="social-icon">
                <img src="/icons/instagram.svg" alt="Instagram" />
              </a>
              <a href="#" className="social-icon">
                <img src="/icons/linkedin.svg" alt="LinkedIn" />
              </a>
              <a href="#" className="social-icon">
                <img src="/icons/slack.svg" alt="Slack" />
              </a>
              <a href="#" className="social-icon">
                <img src="/icons/youtube.svg" alt="YouTube" />
              </a>
              <a href="#" className="social-icon">
                <img src="/icons/x.svg" alt="X" />
              </a>
              <a href="#" className="social-icon">
                <img src="/icons/whatsapp.svg" alt="WhatsApp" />
              </a>
              <a href="#" className="social-icon">
                <img src="/icons/telegram.svg" alt="Telegram" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;