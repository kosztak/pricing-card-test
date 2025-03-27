'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import PricingCard from './PricingCard';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default ({ plans, benefits }) => {
    return (
        <Swiper
            modules={[Pagination]}
            pagination={{clickable: true}}
            // breakpoints={{
            //     0: {
            //       slidesPerView: 1,
            //       centeredSlides: true
            //     },
            //     769: {
            //       slidesPerView: 2,
            //       centeredSlides: true
            //     },
            //     1280: {
            //       slidesPerView: 3,
            //     },
            // }}
            //centeredSlides={true}
            slidesPerView={'auto'}
        >
            {
                plans.map((plan, index) => 
                    <SwiperSlide key={plan.type} virtualIndex={index} className='max-w-fit'>
                        <PricingCard plan={plan} benefits={benefits} />
                    </SwiperSlide>
                )
            }
        </Swiper>
    );
};
