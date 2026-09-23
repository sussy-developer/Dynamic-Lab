import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const LogoText: React.FC = () => {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (textRef.current && textRef.current.children.length > 0) {
      gsap.fromTo(
        textRef.current.children,
        { x: -20, opacity: 0 },
        { 
          x: 0, 
          opacity: 1, 
          duration: 0.6, 
          stagger: 0.05, 
          ease: 'power3.out',
          delay: 0.1
        }
      );
    }
  }, []);

  const text = "Dynamic Lab";

  return (
    <span 
      ref={textRef}
      style={{
        color:'#029bb0', 
        fontFamily: '"Open Sans", sans-serif', 
        fontSize: '1.5rem', 
        fontWeight: 700, 
        letterSpacing: '-0.02em',
        display: 'inline-flex'
      }}
    >
      {text.split('').map((char, index) => (
        <span key={index} style={{ display: 'inline-block', whiteSpace: 'pre' }}>
          {char}
        </span>
      ))}
    </span>
  );
};

export default LogoText;
