// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper";

// import required modules

export default function BannerSwiper() {
  return (
    <div className="w-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="w-full mx-auto h-[200px]"
            src="https://i.ibb.co/q1b9PrT/ghore-boshe-Spoken-English-course-thumbnail-by-Munzereen-Shahid-16x9.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full mx-auto h-[200px]"
            src="https://i.ibb.co/wdYmdf7/english-grammar-crash-course-course-thumbnail-by-sakib-bin-rashid-1x1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full mx-auto h-[200px]"
            src="https://i.ibb.co/ssZXyQJ/Academic-English-Grammar-Course-course-thumbnail-by-Fatima-Farhana-Prova-16x9.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full mx-auto h-[200px]"
            src="https://i.ibb.co/pXjvbsJ/spoken-english-for-kids-course-thumbnail-by-munzereen-shahid-1x1.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
