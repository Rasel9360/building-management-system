import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

import image1 from '../../assets/1.jpg';
import image2 from '../../assets/2.jpg';
import image3 from '../../assets/3.jpg';
import image4 from '../../assets/banner.jpg';

const Banner = () => {

    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Slide image={image4} text='BEVERLY RESIDENCE' description='Plot # 17/A, Road # 126, Gulshan, Dhaka - 1212'></Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide image={image1} text='Find Your Dream Home'></Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide image={image2} text='Sweet Home For Small Family'></Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide image={image3} text='Find Your Dream Home'></Slide>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;