import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Accordion from './Accordion';
import { REGIONS, SUB_REGIONS, PLACES } from '../LocationSelector/DropdownLocation/constants';
import { CATEGORIES, TESTS_DATA } from '../Navlink/Dropdown/constants';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return; // Skip animation on initial mount since inline styles handle the hidden state
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.35, ease: 'power2.out', pointerEvents: 'auto' });
      gsap.to(drawerRef.current, { 
        scale: 1, 
        opacity: 1, 
        duration: 0.5, 
        ease: 'back.out(1.1)', 
        pointerEvents: 'auto' 
      });
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      gsap.to(overlayRef.current, { opacity: 0, duration: 0.35, ease: 'power2.in', pointerEvents: 'none' });
      gsap.to(drawerRef.current, { 
        scale: 0.1, 
        opacity: 0, 
        duration: 0.35, 
        ease: 'power3.inOut', 
        pointerEvents: 'none' 
      });
    }

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  const SimpleItem = ({ text, onClick, level = 0 }: { text: string, onClick?: () => void, level?: number }) => (
    <div 
      onClick={onClick}
      style={{ 
        padding: `0.75rem 1.5rem 0.75rem ${1.5 + level * 1}rem`,
        fontSize: '0.95rem',
        color: '#4b5563',
        fontFamily: '"Open Sans", sans-serif',
        cursor: 'pointer'
      }}
    >
      {text}
    </div>
  );

  return (
    <>
      <div ref={overlayRef} className="mobile-drawer-overlay" onClick={onClose} style={{ pointerEvents: 'none', opacity: 0 }} />
      <div 
        ref={drawerRef} 
        className="mobile-drawer no-scrollbar" 
        style={{ 
          opacity: 0, 
          transform: 'scale(0.1)', 
          transformOrigin: 'calc(100% - 5.375rem) 3.75rem', 
          pointerEvents: 'none' 
        }}
      >
        <div style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e5e7eb' }}>
          <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#029bb0' }}>Menu</span>
          <svg onClick={onClose} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4b5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ cursor: 'pointer' }}>
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>

        <div style={{ padding: '1rem 1.5rem' }}>
          <div style={{ position: 'relative', width: '100%' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }}>
              <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input 
              type="text" 
              placeholder="Search tests..." 
              style={{
                width: '100%',
                padding: '0.75rem 1rem 0.75rem 2.5rem',
                borderRadius: '99px',
                border: '1px solid #e5e7eb',
                outline: 'none',
                fontFamily: '"Open Sans", sans-serif',
                boxSizing: 'border-box'
              }}
            />
          </div>
        </div>

        <div className="no-scrollbar" style={{ flex: 1, overflowY: 'auto' }}>
          {/* Location Accordion */}
          <Accordion title={
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#029bb0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              Select Location
            </div>
          }>
            {REGIONS.map(region => (
              <Accordion key={region} title={region} level={1}>
                {SUB_REGIONS[region]?.map(subRegion => (
                  <Accordion key={subRegion} title={subRegion} level={2}>
                    {PLACES[subRegion]?.map(place => (
                      <SimpleItem key={place} text={place} level={3} onClick={onClose} />
                    ))}
                  </Accordion>
                ))}
              </Accordion>
            ))}
          </Accordion>

          {/* Find a test Accordion */}
          <Accordion title={
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#029bb0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"></path>
              </svg>
              Find a test
            </div>
          }>
            {CATEGORIES.map(category => (
              <Accordion key={category} title={category} level={1}>
                {TESTS_DATA[category]?.map(test => (
                  <SimpleItem key={test} text={test} level={2} onClick={onClose} />
                ))}
              </Accordion>
            ))}
          </Accordion>
          
          <div 
            onClick={onClose}
            style={{ 
              padding: '1.25rem 1.5rem',
              fontSize: '1.05rem',
              fontWeight: 600,
              color: '#1f2937',
              fontFamily: '"Open Sans", sans-serif',
              borderBottom: '1px solid rgba(229, 231, 235, 0.4)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#029bb0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
            Full body checkup packs
          </div>
          
          <div 
            onClick={onClose}
            style={{ 
              padding: '1.25rem 1.5rem',
              fontSize: '1.05rem',
              fontWeight: 600,
              color: '#1f2937',
              fontFamily: '"Open Sans", sans-serif',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            Login
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
