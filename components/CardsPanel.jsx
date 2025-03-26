'use client';

import { useEffect, useState } from 'react';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import PricingCard from './PricingCard';

//import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default ({ plans, benefits }) => {
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        // Check if the screen width is mobile-sized
        const handleResize = () => {
            console.log(window.innerWidth);
            
            setIsMobileView(window.innerWidth <= 768); // Adjust breakpoint as needed
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (isMobileView) {
            // Initialize Swiper only on mobile view
            new Swiper('.swiper', {
                modules: [Pagination],
                slidesPerView: 1,
                spaceBetween: 16,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });
        }
    }, [isMobileView]);

  return (
    <div className={isMobileView? 'swiper' : ''}>
        <div className={isMobileView? 'swiper-wrapper' : 'flex gap-[50px]'}>
            {
                plans.map(plan => 
                    <div key={plan.type} className={isMobileView? 'swiper-slide' : ''}>
                        <PricingCard  plan={plan} benefits={benefits} />
                    </div>)
            }
        </div>
        <div className={isMobileView? "swiper-pagination" : ''}></div>
    </div>
  );
};
