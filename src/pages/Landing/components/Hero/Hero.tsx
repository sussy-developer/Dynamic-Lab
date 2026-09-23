import React from 'react';
import HeroImage from './HeroImage';
import HeroText from './HeroText';
import HeroBtn from './HeroBtn';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section style={{ padding: '0 2rem', marginTop: '1rem', marginBottom: '4rem' }}>
      <div className="hero-container">
        <HeroImage />
        <div className="hero-overlay">
          <HeroText />
          <HeroBtn />
        </div>
      </div>
    </section>
  );
};

export default Hero;