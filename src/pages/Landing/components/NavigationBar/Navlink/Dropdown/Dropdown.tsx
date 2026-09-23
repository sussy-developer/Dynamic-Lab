import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import MegaMenuContainer from '../../MegaMenu/MegaMenuContainer';
import MegaMenuSidebar from '../../MegaMenu/MegaMenuSidebar';
import MegaMenuGrid from '../../MegaMenu/MegaMenuGrid';
import { CATEGORIES, TESTS_DATA } from './constants';

const AnimatedTestMarker = () => {
  const iconRef = useRef(null);

  useEffect(() => {
    if (!iconRef.current) return;
    gsap.fromTo(iconRef.current,
      { y: window.innerHeight, opacity: 0 },
      { y: 45, opacity: 1, duration: 0.9, ease: "back.out(1.2)" } 
    );
  }, []);

  return (
    <img 
      ref={iconRef}
      src="https://img.icons8.com/clouds/100/test-passed.png"
      alt="Test Marker"
      style={{
        position: 'absolute',
        right: '25px', 
        bottom: 0,
        width: '130px',
        height: '130px',
        pointerEvents: 'none'
      }}
    />
  );
};

const renderCategoryIcon = (category: string, color: string) => {
  if (category === 'Fever Test') {
    return (
      <div style={{
        width: '24px', height: '24px', backgroundColor: color,
        WebkitMask: 'url(https://img.icons8.com/external-kosonicon-outline-kosonicon/64/external-fever-temperature-kosonicon-outline-kosonicon-4.png) center/contain no-repeat',
        mask: 'url(https://img.icons8.com/external-kosonicon-outline-kosonicon/64/external-fever-temperature-kosonicon-outline-kosonicon-4.png) center/contain no-repeat',
        flexShrink: 0
      }} />
    );
  }
  if (category === 'Dengue Test') {
    return (
      <div style={{
        width: '24px', height: '24px', backgroundColor: color,
        WebkitMask: 'url(https://img.icons8.com/external-mixed-maxicons/85/external-dengue-diseases-and-injury-mixed-maxicons.png) center/contain no-repeat',
        mask: 'url(https://img.icons8.com/external-mixed-maxicons/85/external-dengue-diseases-and-injury-mixed-maxicons.png) center/contain no-repeat',
        flexShrink: 0
      }} />
    );
  }
  if (category === 'Pregnancy Test') {
    return (
      <div style={{
        width: '24px', height: '24px', backgroundColor: color,
        WebkitMask: 'url(https://img.icons8.com/wired/64/pregnant.png) center/contain no-repeat',
        mask: 'url(https://img.icons8.com/wired/64/pregnant.png) center/contain no-repeat',
        flexShrink: 0
      }} />
    );
  }
  
  const getIconPaths = () => {
    switch (category) {
      case 'Full Body': return <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>;
      case 'Heart Test': return <><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.2 12h5l1.5-3 2.5 6 1.5-3h7.3"/></>;
      case 'HIV Test': return <><path d="M7 16s-2-2-2-4A6 6 0 0 1 17 12c0 2-2 4-2 4L7 22"/><path d="M17 16l-5.5-5.5"/></>;
      case 'Hormone Test': return <><path d="M8 11l-3-1.5-3 1.5v3l3 1.5 3-1.5z"/><path d="M22 11l-3-1.5-3 1.5v3l3 1.5 3-1.5z"/><line x1="8" y1="12.5" x2="16" y2="12.5"/></>;
      case 'Allergy Test': return <><circle cx="12" cy="12" r="5"/><path d="M12 2v3M12 19v3M22 12h-3M5 12H2M19.07 4.93l-2.12 2.12M7.05 16.95l-2.12 2.12M19.07 19.07l-2.12-2.12M7.05 7.05L4.93 4.93"/></>;
      case 'Diabetes Test': return <><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></>;
      case 'Kidney Test': return <><path d="M9 17c-4 0-5-3-5-6s3-5 5-5 5 1 5 4-2 7-5 7z"/><path d="M15 17c4 0 5-3 5-6s-3-5-5-5-5 1-5 4 2 7 5 7z"/></>;
      case 'Liver Test': return <><path d="M4 11c0-4 4-6 8-6s8 1 8 4-4 8-10 8-6-2-6-6z"/></>;
      case 'Thyroid Test': return <><path d="M12 10c-2-2-5-3-7-1s-3 6-1 8 4 3 6 1c0 0 1-1 2-3 1 2 2 3 2 3 2 2 4 1 6-1s1-6-1-8-5-1-7 1c0 0-1 1-1 2z"/></>;
      default: return <circle cx="12" cy="12" r="10" />;
    }
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      {getIconPaths()}
    </svg>
  );
};

const ViewAllFooter = (
  <>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#029bb0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <rect x="3" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="14" width="7" height="7" rx="1"></rect><rect x="3" y="14" width="7" height="7" rx="1"></rect>
    </svg>
    <span style={{ color: '#111827', fontWeight: 800, fontSize: '1.05rem', fontFamily: '"Open Sans", sans-serif' }}>
      View All Categories
    </span>
  </>
);

const Dropdown: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Fever Test');

  return (
    <MegaMenuContainer width="1150px" right="-200px" bottomDecoration={<AnimatedTestMarker />}>
      <MegaMenuSidebar 
        items={CATEGORIES} 
        activeItem={activeCategory} 
        onSelect={setActiveCategory}
        renderIcon={renderCategoryIcon}
        footer={ViewAllFooter}
      />
      <MegaMenuGrid 
        title={activeCategory}
        items={TESTS_DATA[activeCategory] || []}
      />
    </MegaMenuContainer>
  );
};

export default Dropdown;
