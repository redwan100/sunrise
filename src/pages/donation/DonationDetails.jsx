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
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            voluptas labore alias, temporibus numquam at assumenda natus ipsam
            debitis repellendus reprehenderit dolores culpa eius optio
            aspernatur earum nemo dicta pariatur?
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default DonationDetails;
