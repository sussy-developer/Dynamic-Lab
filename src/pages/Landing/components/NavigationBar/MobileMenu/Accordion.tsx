import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

interface AccordionProps {
  title: string | React.ReactNode;
  children: React.ReactNode;
  level?: number;
}

const Accordion: React.FC<AccordionProps> = ({ title, children, level = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (!contentRef.current) return;
    if (isOpen) {
      gsap.to(contentRef.current, { height: 'auto', duration: 0.35, ease: 'power2.out' });
    } else {
      gsap.to(contentRef.current, { height: 0, duration: 0.35, ease: 'power2.out' });
    }
  }, [isOpen]);

  const paddingLeft = `${1.5 + level * 1}rem`;

  return (
    <div style={{ borderBottom: '1px solid rgba(229, 231, 235, 0.4)' }}>
      <div 
        onClick={toggle}
        style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: `1rem 1.5rem 1rem ${paddingLeft}`,
          cursor: 'pointer',
          background: isOpen ? 'rgba(2, 155, 176, 0.03)' : 'transparent',
          transition: 'background 0.2s ease'
        }}
      >
        <div style={{ fontSize: '1.05rem', fontWeight: 600, color: '#1f2937', fontFamily: '"Open Sans", sans-serif' }}>
          {title}
        </div>
        <svg 
          xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
      <div ref={contentRef} className="accordion-content">
        <div style={{ paddingBottom: '0.5rem' }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
