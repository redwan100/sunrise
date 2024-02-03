import "swiper/css";
import "swiper/css/autoplay";
// import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import slideImg from "../../assets/slide1.jpg";

const Slider = () => {
  return (
    <>
      <Swiper
        className="mySwiper"
        // autoplay={{ delay: 1000 }}
        // modules={[Autoplay]}
      >
        <SwiperSlide className="max-w-full">
          <img
            src={slideImg}
            alt=""
            className="w-full h-full max-h-[80vh] block object-cover "
          />
        </SwiperSlide>
        <SwiperSlide className="max-w-full  ">
          <img
            src={slideImg}
            alt=""
            className="w-full h-full max-h-[80vh] block object-cover "
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
