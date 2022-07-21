import React, { ReactNode } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper as Carousel, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation, Autoplay } from "swiper";

interface IPropsSwiper {
  spaceBetween?: number;
  slidesPerView: number;
  navigationView?: boolean;
  breakpoints?: {};
  delay?: number;
  style?: any;
  children: ReactNode;
}

export function Swiper({
  children,
  slidesPerView,
  breakpoints,
  delay,
  navigationView,
  spaceBetween,
  style,
}: IPropsSwiper) {
  return (
    <Carousel
      style={style}
      slidesPerView={slidesPerView || 1}
      spaceBetween={spaceBetween || 5}
      navigation={navigationView || false}
      breakpoints={
        breakpoints || {
          1500: {
            slidesPerView: 3,
            spaceBetween: 200,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          848: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          648: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          200: {
            slidesPerView: 1,
            spaceBetween: 10,
            navigation: false,
          },
        }
      }
      autoplay={{ delay: delay || 3000, disableOnInteraction: false }}
      keyboard={{
        enabled: true,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Keyboard, Pagination, Navigation, Autoplay]}
      className="mySwiperAbout"
    >
      {children}
    </Carousel>
  );
}
