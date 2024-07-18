/* eslint-disable react/prop-types */
import React from 'react';
import { CiCalendarDate } from 'react-icons/ci';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import dateFormatter from '../../utils/dateFormatter';

const NewsCard = ({ news }) => {
  const { _id, image, title, description, date } = news;

  return (
    <>
      <div className="w-full max-w-sm mx-auto sm:max-w-full border border-green-200 cShadow rounded-md overflow-hidden p-3  transition group bg-white">
        <div className=" rounded-[8px] overflow-hidden ">
          <img
            src={image}
            alt="news image"
            className="max-w-full w-full max-h-[12rem] h-full object-cover  group-hover:scale-105 transition"
          />
        </div>
        <div className="p-3">
          <div className="">
            <h1 className="text-2xl mb-1 text-gray-800 font-medium">{title}</h1>

            <p className="text-gray-700 text-sm sm:text-base">
              {<span>{description?.slice(0, 100)}...</span>}
            </p>
          </div>
          <div className="flex  justify-between items-center my-2">
            <span className="font-medium  text-gray-500 text-xs flex items-center gap-1">
              <CiCalendarDate className="text-gray-700" /> {dateFormatter(date)}
            </span>
            {description?.length > 100 && (
              <Link
                to={`/all-news/${_id}`}
                className="transition  flex items-center font-medium text-sm py-1 px-2 rounded-sm text-white ml-auto bg-primary-1 ">
                Read More <IoIosArrowRoundForward className="text-xl" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
