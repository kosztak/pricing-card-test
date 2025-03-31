'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import PricingCard from './PricingCard';

import 'swiper/css';
import 'swiper/css/pagination';

export default ({ plans, benefits }) => {
    return (
        <div className='w-[90%] max-w-[1280px]'>
            <Swiper
                modules={[Pagination]}
                pagination={{clickable: true}}
                slidesPerView={1}
                spaceBetween={50}
                breakpoints={{
                    769: {
                    slidesPerView: 2,
                    },
                    1280: {
                    slidesPerView: 3,
                    },
                }}
                //centeredSlides={true}
                //slidesPerView={'auto'}
            >
                {
                    plans.map((plan, index) => 
                        <SwiperSlide key={plan.type} virtualIndex={index} className='!h-auto'>
                                <PricingCard plan={plan} benefits={benefits} />
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    );
};
