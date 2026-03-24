import React, { useState, useEffect } from 'react';
import { 
  FaDiscord, 
  FaInstagram, 
  FaLinkedin, 
  FaSlack, 
  FaYoutube, 
  FaWhatsapp, 
  FaTelegram 
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
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
      const sections = ['home', 'analytics', 'legal', 'human-capital', 'brands-comms', 'advisory', 'coming-soon'];
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
          
          <nav className={`main-nav ${isMenuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
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
                  href="#analytics"
                  className={activeSection === 'analytics' ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('analytics');
                  }}
                >
                  Analytics
                </a>
              </li>
              <li>
                <a
                  href="#legal"
                  className={activeSection === 'legal' ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('legal');
                  }}
                >
                  Legal
                </a>
              </li>
              <li>
                <a
                  href="#human-capital"
                  className={activeSection === 'human-capital' ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('human-capital');
                  }}
                >
                  Human Capital
                </a>
              </li>
              <li>
                <a
                  href="#brands-comms"
                  className={activeSection === 'brands-comms' ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('brands-comms');
                  }}
                >
                  Brands &amp; Comms
                </a>
              </li>
              <li>
                <a
                  href="#advisory"
                  className={activeSection === 'advisory' ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('advisory');
                  }}
                >
                  Advisory
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

      {/* Breadcrumb Navigation – only shown when inside a sub-section */}
      {activeSection !== 'home' && (() => {
        const sectionLabels = {
          'home': 'Home',
          'analytics': 'Analytics',
          'legal': 'Legal',
          'human-capital': 'Human Capital',
          'brands-comms': 'Brands & Comms',
          'advisory': 'Advisory',
          'coming-soon': 'Coming Soon',
        };
        const crumbs = activeSection === 'home'
          ? [{ label: 'Home', href: '#home' }]
          : [
              { label: 'Home', href: '#home' },
              { label: sectionLabels[activeSection] || activeSection, href: `#${activeSection}` },
            ];
        return (
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <ol className="breadcrumb-list" itemScope itemType="https://schema.org/BreadcrumbList">
              {crumbs.map((crumb, index) => (
                <li
                  key={crumb.href}
                  className="breadcrumb-item"
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/ListItem"
                >
                  {index < crumbs.length - 1 ? (
                    <>
                      <a href={crumb.href} itemProp="item" onClick={(e) => { e.preventDefault(); scrollToSection(crumb.href.slice(1)); }}>
                        <span itemProp="name">{crumb.label}</span>
                      </a>
                      <meta itemProp="position" content={String(index + 1)} />
                      <span className="breadcrumb-separator" aria-hidden="true">›</span>
                    </>
                  ) : (
                    <>
                      <span itemProp="name" aria-current="page">{crumb.label}</span>
                      <meta itemProp="position" content={String(index + 1)} />
                    </>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        );
      })()}

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
            {/* Added logo above the text */}
            <div className="coming-soon-logo">
              <img src="/images/Inzozi-grayscale.png" alt="INZOZI Partners Logo" />
            </div>
            <p className="making-changes-text">We are refining your experience here!</p>
            <h2 className="coming-soon-text">Coming Soon</h2>
            <div className="social-icons">
              <a href="#" className="social-icon" aria-label="Discord">
                <FaDiscord />
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="#" className="social-icon" aria-label="Slack">
                <FaSlack />
              </a>
              <a href="#" className="social-icon" aria-label="YouTube">
                <FaYoutube />
              </a>
              <a href="#" className="social-icon" aria-label="X">
                <FaXTwitter />
              </a>
              <a href="#" className="social-icon" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
              <a href="#" className="social-icon" aria-label="Telegram">
                <FaTelegram />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;