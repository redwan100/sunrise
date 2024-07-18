import { motion } from 'framer-motion';
import React from 'react';
import SectionTitle from '../../components/shared/SectionTitle';
import { useAllProgramQuery } from '../../redux/features/program/programApi';
import ProgramCard from './ProgramCard';

const AllPrograms = () => {
  const { data: programData } = useAllProgramQuery();

  return (
    <div className="w-full my-8 py-4 my-container">
      <div className="">
        <SectionTitle isCenter title="all program" className="text-center py-10" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 max-w-sm mx-auto sm:max-w-full">
        {programData?.map((item, index) => (
          <motion.div
            initial={{
              opacity: 0,
              translateY: index % 2 === 0 ? -50 : 50,
              translateX: index % 2 === 0 ? 50 : -50,
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
            key={item._id}>
            <ProgramCard key={item._id} program={item} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AllPrograms;
