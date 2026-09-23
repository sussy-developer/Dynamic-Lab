import React from 'react';

interface MegaMenuContainerProps {
  children: React.ReactNode;
  width?: string;
  right?: string;
  left?: string;
  bottomDecoration?: React.ReactNode;
}

const MegaMenuContainer: React.FC<MegaMenuContainerProps> = ({ 
  children, 
  width = '950px',
  right = 'auto',
  left = 'auto',
  bottomDecoration
}) => {
  return (
    <div style={{
      position: 'absolute',
      top: '100%',
      right,
      left,
      paddingTop: '20px',
      zIndex: 50,
      width,
    }}>
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.97)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        boxShadow: '0 24px 50px -12px rgba(0, 0, 0, 0.08), 0 4px 12px -4px rgba(0, 0, 0, 0.03)',
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
        border: '1px solid rgba(229, 231, 235, 0.5)',
        position: 'relative',
        zIndex: 2
      }}>
        {children}
      </div>
      {bottomDecoration && (
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 3 }}>
          {bottomDecoration}
        </div>
      )}
    </div>
  );
};

export default MegaMenuContainer;
