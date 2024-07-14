import { motion } from 'framer-motion';
import React from 'react';
import Achievements from './Achievements';
import EventSlider from './EventSlider';

const EventAndAchievement = () => {
  return (
    <div className="w-full my-container my-8 py-4 ">
      <div className="grid gap-10 md:grid-cols-2">
        <motion.div
          initial={{
            translateX: -100,
            opacity: 0.3
          }}
          whileInView={{
            translateX: 0,
            opacity: 1
          }}
          transition={{
            duration: 0.5
          }}
          viewport={{
            once: false,
            amount: 0.5
          }}
          className="w-full overflow-hidden">
          <EventSlider />
        </motion.div>
        <motion.div
          initial={{
            translateX: 100,
            opacity: 0.3
          }}
          whileInView={{
            translateX: 0,
            opacity: 1
          }}
          transition={{
            duration: 0.5
          }}
          viewport={{
            once: false,
            amount: 0.5
          }}>
          <Achievements />
        </motion.div>
      </div>
    </div>
  );
};

export default EventAndAchievement;
