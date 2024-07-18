import { motion } from 'framer-motion';
import React from 'react';
import SectionTitle from '../../components/shared/SectionTitle';
import { useGetAllNewsQuery } from '../../redux/features/news/newsApi';
import NewsCard from './NewsCard';

const AllNewses = () => {
  const { data: programData } = useGetAllNewsQuery({});

  return (
    <div className="w-full my-8 py-4 my-container">
      <div className="">
        <SectionTitle title="all program" className="text-center py-10" />
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
            <NewsCard key={item._id} news={item} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AllNewses;
