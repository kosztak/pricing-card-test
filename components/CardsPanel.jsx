'use client';

import { useEffect, useState } from 'react';

import DesktopView from './views/DesktopView';
import MobileView from './views/MobileView';

export default ({ plans, benefits }) => {
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        // Check if the screen width is mobile-sized
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 768); // Adjust breakpoint as needed
        };

        handleResize();
        
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

  return (
        isMobileView? 
            <MobileView plans={plans} benefits={benefits} /> : 
            <DesktopView plans={plans} benefits={benefits} />
  );
};
