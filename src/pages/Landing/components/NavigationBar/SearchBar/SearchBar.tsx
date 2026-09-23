import React, { useState, useRef, useEffect } from 'react';

const POPULAR_PACKAGES = [
  { name: 'Wellwise Total Profile', tests: 84 },
  { name: 'Wellwise Exclusive Profile', tests: 91 },
  { name: 'Wellwise Advanced Profile', tests: 73 },
  { name: 'Wellwise Basic Profile', tests: 60 },
];

const POPULAR_TESTS = [
  { name: 'HbA1c, Glycated Hemoglobin' },
  { name: 'Complete Blood Count (CBC)' },
  { name: 'Kidney Function Test (KFT) Profile' },
];

const SearchBar: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="18" 
        height="18" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="#029bb0" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        style={{ position: 'absolute', left: '16px', transition: 'all 0.3s ease', zIndex: 10, pointerEvents: 'none' }}
      >
        {isFocused ? (
          <>
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </>
        ) : (
          <>
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </>
        )}
      </svg>
      <input
        type="text"
        className="minimal-search-input"
        placeholder="Search for test and packages ... "
        style={{
          padding: '8px 16px 8px 42px',
          borderRadius: '20px',
          border: '2px solid #029bb0',
          outline: 'none',
          fontSize: '1rem',
          fontFamily: '"Open Sans", sans-serif',
          minWidth: '400px',
          color: '#374151',
          backgroundColor: '#ffffff',
          transition: 'box-shadow 0.2s ease-in-out',
          position: 'relative',
          zIndex: 2
        }}
        onFocus={(e) => {
          setIsFocused(true);
          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(2, 155, 176, 0.2)';
        }}
        onBlur={(e) => {
          e.currentTarget.style.boxShadow = 'none';
        }}
      />

      {/* Pre-recommendation Dropdown */}
      {isFocused && (
        <div style={{
          position: 'absolute',
          top: 'calc(100% + 16px)',
          left: 0,
          right: 0,
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.03)',
          padding: '1.75rem',
          zIndex: 100,
          display: 'flex',
          flexDirection: 'column',
          fontFamily: '"Open Sans", sans-serif',
          animation: 'fadeIn 0.2s ease-out forwards',
          maxHeight: '380px',
          overflowY: 'auto'
        }}
        className="search-dropdown-scroll"
        >
          {/* Tags */}
          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.4rem 1rem', borderRadius: '99px', backgroundColor: '#f3f4f6', fontSize: '0.85rem', color: '#4b5563', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path></svg>
              Fever
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.4rem 1rem', borderRadius: '99px', backgroundColor: '#e0f2fe', fontSize: '0.85rem', color: '#0369a1', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
              Trending
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Popular Packages */}
            <div style={{ borderBottom: '1px solid #f3f4f6', paddingBottom: '1.5rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6b7280', fontWeight: 700, margin: 0 }}>Popular Packages</h4>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                {POPULAR_PACKAGES.map((pkg, idx) => (
                  <div key={idx} className="search-dropdown-item" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 1rem', margin: '0 -1rem', borderRadius: '12px', cursor: 'pointer', border: '1px solid transparent' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#f0fdfa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                        <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#029bb0' }}>{pkg.name}</span>
                        <span style={{ fontSize: '0.8rem', color: '#6b7280', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                          Includes {pkg.tests} Tests
                        </span>
                      </div>
                    </div>
                    <button style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700, color: '#0d9488', padding: '0.4rem 1rem', backgroundColor: '#ffffff', border: '1px solid #ccfbf1', borderRadius: '99px', cursor: 'pointer', transition: 'all 0.2s', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }} className="search-action-btn">
                      Book
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Tests */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"></path></svg>
                <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6b7280', fontWeight: 700, margin: 0 }}>Popular Tests</h4>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                {POPULAR_TESTS.map((test, idx) => (
                  <div key={idx} className="search-dropdown-item" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 1rem', margin: '0 -1rem', borderRadius: '12px', cursor: 'pointer' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2"></path><path d="M8.5 2h7"></path><path d="M14.5 16h-5"></path></svg>
                      </div>
                      <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#029bb0' }}>{test.name}</span>
                    </div>
                    <button style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700, color: '#374151', padding: '0.4rem 1rem', backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '99px', cursor: 'pointer', transition: 'all 0.2s', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }} className="search-action-btn-secondary">
                      Add +
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
