import React, { useState } from 'react';
import DropdownLocation from './DropdownLocation/DropdownLocation';

const LocationSelector: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Bengaluru, IN');

  const handleLocationSelect = (location: string) => {
    setSelectedLocation(location);
    setIsDropdownOpen(false);
  };

  return (
    <div 
      style={{ position: 'relative' }}
      onMouseEnter={() => { setIsHovered(true); setIsDropdownOpen(true); }}
      onMouseLeave={() => { setIsHovered(false); setIsDropdownOpen(false); }}
    >
      <div 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '6px', 
          cursor: 'pointer', 
          fontFamily: '"Open Sans", sans-serif',
          color: isHovered ? '#111827' : '#4b5563',
          transition: 'color 0.2s ease',
          whiteSpace: 'nowrap'
        }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="18" 
          height="18" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="#029bb0" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
        <span style={{ fontSize: '0.95rem', fontWeight: 600, letterSpacing: '0.01em' }}>{selectedLocation}</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="14" 
          height="14" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          style={{ 
            marginTop: '2px',
            transition: 'transform 0.2s ease',
            transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)'
          }}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>

      {isDropdownOpen && <DropdownLocation onSelectLocation={handleLocationSelect} />}
    </div>
  );
};

export default LocationSelector;
