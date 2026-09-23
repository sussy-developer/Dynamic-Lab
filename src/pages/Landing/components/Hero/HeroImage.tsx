import React from 'react';
import heroImg from '../../assets/hero.png';

const HeroImage: React.FC = () => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <img 
        src={heroImg} 
        alt="Dynamic Lab Hero" 
        className="hero-image"
      />
    </div>
  );
};

export default HeroImage;
