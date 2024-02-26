import { motion } from "framer-motion";
const DonationDetails = () => {
  return (
    <div className="py-8">
      <motion.div
        initial={{
          translateX: 300,

          opacity: 0.3,
        }}
        animate={{
          translateX: 0,

          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{
          once: false,
          amount: 0.5,
        }}
      >
        <div className="my-container">
          <p className="py-8 text-center text-4xl font-medium">Coming soon!</p>
        </div>
      </motion.div>
    </div>
  );
};

export default DonationDetails;
