import React from 'react';

const HeroText: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div style={{
        fontFamily: '"Open Sans", sans-serif',
        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
        fontWeight: 800,
        color: '#1f2937',
        lineHeight: 1.1,
        letterSpacing: '-0.02em'
      }}>
        Family body<br />
        checkup package<br />
        Now at ₹199
      </div>
      
      <div className="hero-features">
        {/* Item 1 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#1f2937', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a2d2c7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/>
              <path d="m9 12 2 2 4-4"/>
            </svg>
          </div>
          <span style={{ fontSize: '1.1rem', color: '#1f2937', fontWeight: 500, fontFamily: '"Open Sans", sans-serif' }}>Full body checkup with cancer</span>
        </div>
        {/* Item 2 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#1f2937', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a2d2c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2"></path>
              <path d="M8.5 2h7"></path>
              <path d="M14.5 16h-5"></path>
            </svg>
          </div>
          <span style={{ fontSize: '1.1rem', color: '#1f2937', fontWeight: 500, fontFamily: '"Open Sans", sans-serif' }}>Free home sample pickup</span>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
