import React, { useState } from 'react';
import { CiCalendarDate } from 'react-icons/ci';
import dateFormatter from '../../utils/dateFormatter';

const NewsCard = ({ news }) => {
  const [showText, setShowText] = useState(false);
  const { image, title, description, date } = news;

  const toggleText = () => {
    setShowText((prev) => !prev);
  };

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

            {showText ? (
              <>
                <p className="text-gray-700 text-sm sm:text-base">
                  <span>{description}</span>
                </p>
              </>
            ) : (
              <>
                <p className="text-gray-700 text-sm sm:text-base">
                  {description?.length > 100 ? (
                    <span>{description.slice(0, 100)}...</span>
                  ) : (
                    description
                  )}
                </p>
              </>
            )}
          </div>
          <div className="flex  justify-between items-center my-2">
            <span className="font-medium  text-gray-500 text-xs flex items-center gap-1">
              <CiCalendarDate className="text-gray-700" /> {dateFormatter(date)}
            </span>
            <button
              onClick={toggleText}
              className=" py-1  px-2 rounded-sm capitalize font-medium border-primary-1 border  text-primary-1 text-sm transition-all hover:text-gray-100 hover:bg-primary-1">
              {showText ? 'read less' : 'read more'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
