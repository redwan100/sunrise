import 'swiper/css';
import 'swiper/css/autoplay';
// import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';

import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';
import { Autoplay } from 'swiper/modules';
import SectionTitle from '../../components/shared/SectionTitle';
import DonationBtn from '../../components/shared/buttons/DonationBtn';

import React from 'react';
import { FaHandHoldingDollar } from 'react-icons/fa6';
import { useGetHelpPoorPeopleQuery } from '../../redux/features/helpPoorPeople/helpPoorPeople';

const Donation = () => {
  const { data: slideImg, isLoading } = useGetHelpPoorPeopleQuery();
  let renderItem;
  if (isLoading) {
    renderItem = <p className="text-4xl text-center font-semibold">Loading...</p>;
  } else if (slideImg?.length === 0) {
    renderItem = <p className="text-4xl text-center font-semibold">No data is available</p>;
  } else if (slideImg?.length > 0) {
    renderItem = (
      <div className="w-full my-container py-8">
        <div className="mb-8">
          <SectionTitle isCenter title="Help poor people" className="text-center" />
        </div>
        <motion.div
          initial={{
            scale: 0.2,
            opacity: 0.3
          }}
          whileInView={{
            scale: 1,
            opacity: 1
          }}
          transition={{
            duration: 0.5
          }}
          viewport={{
            once: false,
            amount: 0.5
          }}
          className="rounded-md overflow-hidden ">
          <Swiper className="mySwiper" autoplay={{ delay: 2000 }} modules={[Autoplay]}>
            {slideImg?.map((img) => (
              <SwiperSlide className="max-w-full w-full" key={img._id}>
                <img
                  src={img.url}
                  alt=""
                  className="w-full h-full max-h-[60vh] block object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
        <div className="block mx-auto w-max mt-8 ">
          <Link to={'/donation-details'} className="">
            <DonationBtn text="donate now" icon={FaHandHoldingDollar} />
          </Link>
        </div>
      </div>
    );
  }
  return <>{renderItem}</>;
};

export default Donation;
