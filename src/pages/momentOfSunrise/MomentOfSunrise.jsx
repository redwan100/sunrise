import { motion } from 'framer-motion';
import React from 'react';

import SectionTitle from '../../components/shared/SectionTitle';
import { useGetAllMomentQuery } from '../../redux/features/momentOfSunrise/momentOfSunriseApi';
import MomentOfSunriseCard from './MomentOfSunriseCard';

const MomentOfSunrise = () => {
  const { data: moments } = useGetAllMomentQuery();

  return (
    <div className="w-full p-8">
      <div className="w-max mx-auto pb-8 pt-2">
        <SectionTitle title="Moment Of Sunrise" />
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 my-container">
        {moments?.map((moment, index) => (
          <motion.div
            initial={{
              opacity: 0,
              translateX: index % 2 === 0 ? -50 : 50,
              translateY: index % 2 === 0 ? 50 : -50,
              scale: 0.9
            }}
            whileInView={{
              opacity: 1,
              translateY: 0,
              translateX: 0,
              scale: 1
            }}
            transition={{
              duration: 0.5,
              staggerChildren: 0.6
            }}
            viewport={{ once: false, amount: 0.5 }}
            key={moment.id}>
            <MomentOfSunriseCard moment={moment} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MomentOfSunrise;
