import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/shared/SectionTitle';
import { useGetAllNewsQuery } from '../../redux/features/news/newsApi';
import NewsCard from './NewsCard';
const News = () => {
  const { data: newses, isLoading } = useGetAllNewsQuery();

  return (
    <>
      {!isLoading ? (
        <div className="my-container">
          <div className="py-4">
            <SectionTitle title="latest news" className="text-center pb-3" />
          </div>
          <div className="grid gap-7 sm:gap-5 sm:grid-cols-2 md:grid-cols-3 items-center">
            {newses?.map((news, index) => (
              <motion.div
                key={news._id}
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
                viewport={{ once: false, amount: 0.5 }}>
                <NewsCard news={news} />
              </motion.div>
            ))}

            <div>
              <Link
                to="/all-news"
                className="bg-primary-1 text-white block mx-auto w-max mt-8 mb-2 py-2 px-5 hover:bg-green-600 transition">
                View All News
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <>
          {' '}
          <p>Loading...</p>
        </>
      )}
    </>
  );
};

export default News;
