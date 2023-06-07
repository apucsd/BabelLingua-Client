import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Banner = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
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
          <img
            className="w-full h-screen"
            src="https://img.freepik.com/free-psd/new-language-banner-template_23-2149278874.jpg?w=1060&t=st=1686118511~exp=1686119111~hmac=d1c9c1958156b41e148e384a11611923d74307e510e93e024a62f3b87f2d21b1"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-screen"
            src="https://img.freepik.com/free-photo/english-books-resting-table-working-space_23-2149429616.jpg?w=900&t=st=1686118269~exp=1686118869~hmac=fd914dd9a4e2acf53e4c61e0636e63b62c08809ce4b621d4a8cad45972293324"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-screen"
            src="https://img.freepik.com/free-photo/english-books-stacks-table-working-space_23-2149429568.jpg?w=900&t=st=1686118383~exp=1686118983~hmac=a6d3a8f36a13bcff39b192a680a7b612c145dd91a0fe1eb77f7da635cdd58343"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default Banner;
