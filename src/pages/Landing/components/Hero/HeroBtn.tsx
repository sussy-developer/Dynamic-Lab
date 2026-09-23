import React, { useRef } from 'react';
import { gsap } from 'gsap';

const HeroBtn: React.FC = () => {
  const btnRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<SVGSVGElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);

  const text = "Book now";

  const handleMouseEnter = () => {
    gsap.to(circleRef.current, { scale: 1.1, backgroundColor: '#111827', duration: 0.4, ease: 'back.out(2)' });
    gsap.to(arrowRef.current, { x: 4, y: -4, rotation: 10, duration: 0.4, ease: 'back.out(2)' });
    gsap.to(btnRef.current, { scale: 1.05, backgroundColor: '#111827', duration: 0.4, ease: 'back.out(1.5)' });
    
    gsap.to(text1Ref.current, { y: -28, duration: 0.5, ease: 'power3.inOut' });
    gsap.to(text2Ref.current, { y: 0, duration: 0.5, ease: 'power3.inOut' });
  };

  const handleMouseLeave = () => {
    gsap.to(circleRef.current, { scale: 1, backgroundColor: '#1f2937', duration: 0.4, ease: 'power2.out' });
    gsap.to(arrowRef.current, { x: 0, y: 0, rotation: 0, duration: 0.4, ease: 'power2.out' });
    gsap.to(btnRef.current, { scale: 1, backgroundColor: '#1f2937', duration: 0.4, ease: 'power2.out' });
    
    gsap.to(text1Ref.current, { y: 0, duration: 0.5, ease: 'power3.inOut' });
    gsap.to(text2Ref.current, { y: 28, duration: 0.5, ease: 'power3.inOut' });
  };

  return (
    <div
      className="hero-btn-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Pill Button */}
      <div
        ref={btnRef}
        className="hero-btn-main"
      >
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', height: '28px', overflow: 'hidden' }}>
          <span ref={text1Ref} style={{ display: 'block', lineHeight: '28px' }}>
            {text}
          </span>
          <span ref={text2Ref} style={{ display: 'block', position: 'absolute', top: 0, left: 0, width: '100%', textAlign: 'center', lineHeight: '28px', transform: 'translateY(28px)' }}>
            {text}
          </span>
        </div>
      </div>

      {/* Arrow Circle */}
      <div
        ref={circleRef}
        className="hero-btn-circle"
      >
        <svg
          ref={arrowRef}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 17L17 7" />
          <path d="M7 7h10v10" />
        </svg>
      </div>
    </div>
  );
};

export default HeroBtn;
