// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import required modules
import React from 'react';
import { Autoplay } from 'swiper/modules';
import SectionTitle from '../../components/shared/SectionTitle';
import { useGetRecentEventQuery } from '../../redux/features/recentEvent/recentEventApi';

const EventSlider = () => {
  const { data, isLoading } = useGetRecentEventQuery();

  return (
    <>
      <div className="my-4">
        <SectionTitle title="recent events" />
      </div>
      <Swiper autoplay={{ delay: 2000 }} modules={[Autoplay]} className="rounded-md">
        {!isLoading ? (
          <>
            {data.length > 0 &&
              data.map((item) => (
                <SwiperSlide key={item._id}>
                  <img
                    src={item.url}
                    alt="event image"
                    className="w-full max-h-[22rem] h-full object-cover"
                  />
                </SwiperSlide>
              ))}
          </>
        ) : (
          <>
            <p>Loading...</p>
          </>
        )}
      </Swiper>
    </>
  );
};

export default EventSlider;
