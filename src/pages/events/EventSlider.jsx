import img1 from "../../assets/slide1.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import required modules
import { Autoplay } from "swiper/modules";
import SectionTitle from "../../components/shared/SectionTitle";

const EventSlider = () => {
  return (
    <>
      <div className="my-4">
        <SectionTitle title="recent events" />
      </div>
      <Swiper
        autoplay={{ delay: 800 }}
        modules={[Autoplay]}
        className="rounded-md"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default EventSlider;
