import "swiper/css";
import "swiper/css/autoplay";
// import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from "framer-motion";
import slideImg from "../../assets/slide1.jpg";

import { FaHandHoldingDollar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper/modules";
import SectionTitle from "../../components/shared/SectionTitle";
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
        <Link
          to={"/donation-details"}
          className="bg-gradient-to-br from-green-500 to-green-600 py-2 px-4 rounded-md font-semibold text-lg w-full flex items-center gap-1 text-white hover:bg-gradient-to-br hover:from-green-600 hover:to-green-500 hover:transition duration-400"
        >
          Donate Here <FaHandHoldingDollar />
        </Link>
      </div>
    </div>
  );
};

export default Donation;
