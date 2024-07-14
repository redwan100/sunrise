import 'swiper/css';
import 'swiper/css/autoplay';
// import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';

import React from 'react';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { useGetHomeSliderQuery } from '../../redux/features/homeSlider/homeSliderApi';

const Slider = () => {
  const { data, isLoading } = useGetHomeSliderQuery();

  return (
    <div className="overflow-hidden">
      {!isLoading ? (
        <>
          <Swiper
            className="mySwiper"
            autoplay={{ delay: 5000 }}
            navigation
            modules={[Autoplay, Navigation]}>
            {data?.map((img) => (
              <SwiperSlide className="max-w-full h-full object-cover" key={img._id}>
                <img
                  src={img.url}
                  alt=""
                  className="w-full h-full max-h-[80vh] block object-cover "
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      ) : (
        <>
          <p>Loading...</p>
        </>
      )}
    </div>
  );
};

export default Slider;
