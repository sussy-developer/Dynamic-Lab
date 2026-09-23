import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import logoPng from '../../../assets/logo(best).png';
import LogoText from './LogoText';

const Logo: React.FC = () => {
  const logoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (logoRef.current) {
      gsap.fromTo(
        logoRef.current,
        { rotation: -180, scale: 0.5, opacity: 0 },
        { rotation: 0, scale: 1, opacity: 1, duration: 1, ease: 'back.out(1.7)' }
      );
    }
  }, []);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
      <img ref={logoRef} src={logoPng} alt="Logo" style={{ height: '45px', width: 'auto', objectFit: 'contain' }} />
      <LogoText />
    </div>
  );
};

export default Logo;
