import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { EffectCoverflow } from 'swiper/modules';

import PricingCard from "../PricingCard";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function MobileView({plans, benefits}) {
    return(
        <Swiper
            className='w-[327px]'
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={50}
            pagination={{ clickable: true }}
        >
            {
                plans.map(plan => 
                    <SwiperSlide key={plan.type}>
                        <PricingCard plan={plan} benefits={benefits} isDesktopView={false} />
                    </SwiperSlide>)
            }
        </Swiper>
    )
}