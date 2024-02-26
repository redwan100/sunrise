import "swiper/css";
import "swiper/css/autoplay";
// import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from "framer-motion";
import slideImg from "../../assets/slide1.jpg";

import { Link } from "react-router-dom";
import { Autoplay } from "swiper/modules";
import SectionTitle from "../../components/shared/SectionTitle";
import DonationBtn from "../../components/shared/buttons/DonationBtn";

import { FaHandHoldingDollar } from "react-icons/fa6";

const Donation = () => {
  return (
    <div className="w-full my-container py-8">
      <div className="mb-8">
        <SectionTitle isCenter title="Donation" />
      </div>
      <motion.div
        initial={{
          scale: 0.2,
          opacity: 0.3,
        }}
        whileInView={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        viewport={{
          once: false,
          amount: 0.5,
        }}
        className="rounded-md overflow-hidden "
      >
        <Swiper
          className="mySwiper"
          autoplay={{ delay: 1000 }}
          modules={[Autoplay]}
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
      </motion.div>
      <div className="block mx-auto w-max mt-8 ">
        <Link to={"/donation-details"} className="">
          <DonationBtn text="donate now" icon={FaHandHoldingDollar} />
        </Link>
      </div>
    </div>
  );
};

export default Donation;
