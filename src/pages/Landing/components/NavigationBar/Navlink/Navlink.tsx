import React, { useState } from 'react';
import Dropdown from './Dropdown/Dropdown';

interface NavlinkProps {
  text: string;
}

const Navlink: React.FC<NavlinkProps> = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
          gap: '4px',
          color: isHovered ? '#029bb0' : '#4b5563',
          fontWeight: 600,
          fontFamily: '"Open Sans", sans-serif',
          fontSize: '1rem',
          transition: 'color 0.2s ease-in-out',
          cursor: 'pointer',
          whiteSpace: 'nowrap'
        }}
      >
        <span>{text}</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          style={{ 
            transition: 'transform 0.2s ease',
            transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)'
          }}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>

      {isDropdownOpen && <Dropdown />}
    </div>
  );
};

export default Navlink;
