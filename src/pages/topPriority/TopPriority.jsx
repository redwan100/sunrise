import womenEdu from "../../assets/womenEdu.jpg";

import { motion } from "framer-motion";

const TopPriority = () => {
  return (
    <div className="my-20">
      <motion.div className="w-full my-container grid items-center md:grid-cols-2 gap-8">
        <motion.div
          initial={{
            translateX: 100,
            opacity: 0.3,
          }}
          whileInView={{
            translateX: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          viewport={{
            once: false,
            amount: 0.5,
          }}
          className=""
        >
          <img
            src={womenEdu}
            alt="women education"
            className="max-w-full rounded-md"
          />
        </motion.div>
        <motion.div
          initial={{
            translateX: -100,
            opacity: 0.1,
          }}
          whileInView={{
            translateX: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          viewport={{
            once: false,
            amount: 0.5,
          }}
          className="space-y-3  h-max p-10 rounded-md bg-gradient-to-br from-lime-200 to-primary-1 border border-lime-300"
        >
          <h1 className="text-2xl xl:text-3xl  font-semibold text-lime-900 text-center">
            WASH is a top priority for{" "}
            <span className=" text-lime-950">SUNRISE</span>
          </h1>
          <p className="text-sm sm:text-base text-lime-900 text-justify ">
            The extensive reach of TMSS across all of the nations has created a
            wealth of opportunity for TMSS to work in this crucial sector.
            Currently, TMSS is carrying out a number of activities on its own
            initiative and with the assistance of other donor organizations to
            ensure the access to safe water, sanitary facilities, and hygienic
            practices for the backward communities across the country.
          </p>
          <div className="pt-6">
            <button className="w-max mx-auto block bg-lime-900 hover:bg-lime-950 transition-colors  py-2 px-4 text-gray-100 rounded-md">
              Read More
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TopPriority;
