import React from 'react';
import RollText from './RollText';

export interface MegaMenuGridProps {
  title?: string;
  items: string[];
  columns?: number;
  onItemClick?: (item: string) => void;
}

const MegaMenuGrid: React.FC<MegaMenuGridProps> = ({ title, items, columns = 3, onItemClick }) => {
  return (
    <div style={{
      flex: 1,
      padding: '40px',
      display: 'flex',
      flexDirection: 'column',
      height: '520px',
      overflowY: 'auto'
    }}>
      {title && (
        <h2 style={{
          color: '#111827',
          fontSize: '1.85rem',
          fontWeight: 800,
          fontFamily: '"Open Sans", sans-serif',
          letterSpacing: '-0.03em',
          margin: '0 0 32px 0'
        }}>
          {title}
        </h2>
      )}

      <div style={{
        columnCount: columns,
        columnGap: '48px',
        columnRule: '1px solid rgba(229, 231, 235, 0.6)',
        marginBottom: '40px'
      }}>
        {items?.map((item, idx) => (
          <div key={idx} style={{ breakInside: 'avoid', marginBottom: '24px' }}>
            <span 
              className="test-link-item" 
              onClick={() => onItemClick && onItemClick(item)}
              style={{
                color: '#4b5563',
                fontSize: '0.95rem',
                fontFamily: '"Open Sans", sans-serif',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'inline-block'
              }}
            >
              <RollText>{item}</RollText>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MegaMenuGrid;
