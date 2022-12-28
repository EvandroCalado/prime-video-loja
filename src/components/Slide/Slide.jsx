import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slide.scss";

import ReactPlayer from "react-player";

const Slide = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="slide-wrapper">
          <img
            src="https://m.media-amazon.com/images/S/sonata-images-prod/TVOD_ROW_FallAQueda_VOD/b3d57521-999c-4c5c-88ef-7812c777bf0c._UR3000,600_SX1500_FMwebp_.jpeg"
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://m.media-amazon.com/images/S/sonata-images-prod/TVOD_ROW_Smile_BR/f62b837e-9098-4b5e-aa8c-1372514b60dc._UR3000,600_SX1500_FMwebp_.jpeg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://m.media-amazon.com/images/S/sonata-images-prod/TVOD_ROW_LyleLyleCrocodile_BR_VOD/d12da981-a33f-470f-a600-97a88257c097._UR3000,600_SX1500_FMwebp_.jpeg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://m.media-amazon.com/images/S/sonata-images-prod/TVOD_ROW_HalloweenEnds_BR/97ab5764-152c-4aa6-88ee-8dfd72d4df80._UR3000,600_SX1500_FMwebp_.jpeg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://m.media-amazon.com/images/S/sonata-images-prod/TVOD_ROW_TheWomanKing_VOD_BR_V2/9e17935c-e5da-4b76-abf4-4e28796cbaf2._UR3000,600_SX1500_FMwebp_.jpeg"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slide;
