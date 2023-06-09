import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import b1 from "../../../assets/images/banner/b1.png";
import b2 from "../../../assets/images/banner/b2.png";
import b3 from "../../../assets/images/banner/b3.png";
import b4 from "../../../assets/images/banner/b4.png";

const Banner = () => {
  return (
    <>
      <div className="my-10">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
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
            <img className="w-full h-full" src={b1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-full" src={b2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-full" src={b3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-full" src={b4} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
export default Banner;
