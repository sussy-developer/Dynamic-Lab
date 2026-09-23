import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import MegaMenuContainer from '../../MegaMenu/MegaMenuContainer';
import MegaMenuSidebar from '../../MegaMenu/MegaMenuSidebar';
import MegaMenuGrid from '../../MegaMenu/MegaMenuGrid';
import { REGIONS, SUB_REGIONS, PLACES } from './constants';

const AnimatedMarker = () => {
  const iconRef = useRef(null);

  useEffect(() => {
    if (!iconRef.current) return;
    gsap.fromTo(iconRef.current,
      { y: window.innerHeight, opacity: 0 },
      { y: 45, opacity: 1, duration: 0.9, ease: "back.out(1.2)" } 
    );
  }, []);

  return (
    <img 
      ref={iconRef}
      src="https://img.icons8.com/clouds/100/place-marker.png"
      alt="Location Marker"
      style={{
        position: 'absolute',
        right: '25px', 
        bottom: 0,
        width: '130px',
        height: '130px',
        pointerEvents: 'none'
      }}
    />
  );
};

interface DropdownLocationProps {
  onSelectLocation: (location: string) => void;
}

const DropdownLocation: React.FC<DropdownLocationProps> = ({ onSelectLocation }) => {
  const [activeRegion, setActiveRegion] = useState('Kolkata');
  const [activeSubRegion, setActiveSubRegion] = useState('North Kolkata');

  const handleRegionSelect = (region: string) => {
    setActiveRegion(region);
    if (SUB_REGIONS[region] && SUB_REGIONS[region].length > 0) {
      setActiveSubRegion(SUB_REGIONS[region][0]);
    } else {
      setActiveSubRegion('');
    }
  };

  return (
    <MegaMenuContainer 
      width="1150px" 
      right="-300px" 
      left="auto"
      bottomDecoration={<AnimatedMarker />}
    >
      <MegaMenuSidebar 
        width="220px"
        items={REGIONS} 
        activeItem={activeRegion} 
        onSelect={handleRegionSelect}
      />
      <MegaMenuSidebar 
        width="260px"
        items={SUB_REGIONS[activeRegion] || []} 
        activeItem={activeSubRegion} 
        onSelect={setActiveSubRegion}
      />
      <MegaMenuGrid 
        title={activeSubRegion || activeRegion}
        items={PLACES[activeSubRegion] || []}
        columns={3}
        onItemClick={onSelectLocation}
      />
    </MegaMenuContainer>
  );
};

export default DropdownLocation;
