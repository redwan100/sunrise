import "swiper/css";
import "swiper/css/autoplay";
// import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import s1 from "../../assets/s1.jpg";
import s2 from "../../assets/s2.jpg";
import s3 from "../../assets/s3.jpg";
import s4 from "../../assets/s4.jpg";
import s5 from "../../assets/s5.jpg";

const slideImg = [s1, s2, s3, s4, s5];

const Slider = () => {
  return (
    <div className="overflow-hidden">
      <Swiper
        className="mySwiper"
        autoplay={{ delay: 5000 }}
        navigation
        modules={[Autoplay, Navigation]}
      >
        {slideImg.map((img) => (
          <SwiperSlide className="max-w-full h-full object-cover" key={img}>
            <img
              src={img}
              alt=""
              className="w-full h-full max-h-[80vh] block object-cover "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
