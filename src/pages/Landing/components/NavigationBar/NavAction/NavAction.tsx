import React, { useState } from 'react';

interface NavActionProps {
  text: string;
  icon: React.ReactNode;
  color: string;
  hoverColor?: string;
}

const NavAction: React.FC<NavActionProps> = ({ text, icon, color, hoverColor = color }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        cursor: 'pointer',
        color: isHovered ? hoverColor : color,
        transition: 'all 0.2s ease',
        opacity: isHovered ? 0.85 : 1,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {icon}
      </div>
      <span style={{ 
        fontSize: '1rem', 
        fontWeight: 500, 
        fontFamily: '"Open Sans", sans-serif'
      }}>
        {text}
      </span>
    </div>
  );
};

export default NavAction;
