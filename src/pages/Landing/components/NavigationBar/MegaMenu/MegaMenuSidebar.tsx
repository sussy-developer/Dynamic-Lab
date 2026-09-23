import React from 'react';

export interface MegaMenuSidebarProps {
  items: string[];
  activeItem: string;
  onSelect: (item: string) => void;
  width?: string;
  height?: string;
  renderIcon?: (item: string, color: string) => React.ReactNode;
  footer?: React.ReactNode;
}

const MegaMenuSidebar: React.FC<MegaMenuSidebarProps> = ({
  items,
  activeItem,
  onSelect,
  width = '280px',
  height = '520px',
  renderIcon,
  footer
}) => {
  return (
    <div style={{
      width,
      backgroundColor: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      borderRight: '1px solid rgba(229, 231, 235, 0.8)',
      flexShrink: 0
    }}>
      <div className="no-scrollbar" style={{
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
        height,
        padding: '16px 12px'
      }}>
        {items.map(item => {
          const isActive = activeItem === item;
          return (
            <div 
              key={item}
              onMouseEnter={() => onSelect(item)}
              style={{
                padding: '12px 16px',
                margin: '2px 0',
                borderRadius: '12px',
                backgroundColor: isActive ? '#e0f7fa' : 'transparent',
                color: isActive ? '#029bb0' : '#4b5563',
                fontWeight: isActive ? 700 : 500,
                fontSize: '1rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                fontFamily: '"Open Sans", sans-serif',
                transition: 'all 0.2s ease',
                justifyContent: renderIcon ? 'flex-start' : 'space-between'
              }}
            >
              {renderIcon && renderIcon(item, isActive ? '#029bb0' : '#6b7280')}
              <span style={{ flex: 1 }}>{item}</span>
              
              {!renderIcon && isActive && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#029bb0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'translateX(2px)' }}>
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              )}
            </div>
          );
        })}
      </div>
      
      {footer && (
        <div style={{
          padding: '24px',
          backgroundColor: '#ffffff',
          borderTop: '1px solid rgba(229, 231, 235, 0.5)',
          marginTop: 'auto',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          cursor: 'pointer',
          boxShadow: '0 -4px 10px rgba(0,0,0,0.02)'
        }}>
          {footer}
        </div>
      )}
    </div>
  );
};

export default MegaMenuSidebar;
