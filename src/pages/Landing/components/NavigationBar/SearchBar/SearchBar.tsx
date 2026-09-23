import React, { useState } from 'react';

const SearchBar: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
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
        style={{ position: 'absolute', left: '12px', transition: 'all 0.3s ease' }}
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
          padding: '8px 16px 8px 36px',
          borderRadius: '20px',
          border: '2px solid #029bb0',
          outline: 'none',
          fontSize: '1rem',
          fontFamily: '"Open Sans", sans-serif',
          minWidth: '400px',
          color: '#9b9999',
          backgroundColor: '#ffffff',
          transition: 'box-shadow 0.2s ease-in-out',
        }}
        onFocus={(e) => {
          setIsFocused(true);
          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(2, 155, 176, 0.2)';
        }}
        onBlur={(e) => {
          setIsFocused(false);
          e.currentTarget.style.boxShadow = 'none';
        }}
      />
    </div>
  );
};

export default SearchBar;
