import React, { useState } from 'react';

interface SimpleNavlinkProps {
  text: string;
  icon?: React.ReactNode;
}

const SimpleNavlink: React.FC<SimpleNavlinkProps> = ({ text, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a 
      href="#"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        textDecoration: 'none',
        color: isHovered ? '#029bb0' : '#4b5563',
        fontWeight: 600,
        fontFamily: '"Open Sans", sans-serif',
        fontSize: '1rem',
        transition: 'color 0.2s ease-in-out',
        cursor: 'pointer',
        whiteSpace: 'nowrap'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {icon && <span style={{ display: 'flex', alignItems: 'center' }}>{icon}</span>}
      {text}
    </a>
  );
};

export default SimpleNavlink;
