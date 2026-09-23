import React, { useState, useEffect } from 'react';
import Logo from './Logo/Logo';
import SearchBar from './SearchBar/SearchBar';
import LocationSelector from './LocationSelector/LocationSelector';
import Navlink from './Navlink/Navlink';
import SimpleNavlink from './SimpleNavlink/SimpleNavlink';
import NavAction from './NavAction/NavAction';
import MobileMenu from './MobileMenu/MobileMenu';
import './Nav.css';

const Nav: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav style={{ 
        position: 'sticky',
        top: '10px',
        zIndex: 50,
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        padding: '1rem 2rem',
        backgroundColor: isScrolled ? 'transparent' : 'rgb(208, 236, 241)',
        borderRadius: '24px',
        margin: '1.5rem 2rem',
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
        pointerEvents: isScrolled ? 'none' : 'auto'
      }}>
        {/* Left Side: Logo */}
        <div className={`nav-pill-wrapper ${isScrolled ? 'scrolled' : ''}`}>
          <Logo />
        </div>
        
        {/* Desktop Navbar Contents */}
        <div className="desktop-only" style={{ display: 'contents' }}>
          {!isScrolled && (
            <>
              <SearchBar />
              <div style={{ height: '24px', width: '2px', backgroundColor: 'rgba(2, 155, 176, 0.3)', borderRadius: '4px' }} />
              <LocationSelector />
              <Navlink text="Find a test" />
              <SimpleNavlink 
                text="Full body checkup packs" 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#029bb0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                }
              />
            </>
          )}
          
          <div className={`nav-pill-wrapper ${isScrolled ? 'scrolled' : ''}`}>
            <NavAction 
              text="Login" 
              color="#111827"
              hoverColor="#029bb0"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              } 
            />
          </div>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="mobile-only">
          <div 
            onClick={() => setIsMobileMenuOpen(true)}
            className={`nav-pill-wrapper ${isScrolled ? 'scrolled' : ''}`}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </div>
        </div>
      </nav>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
};

export default Nav;
