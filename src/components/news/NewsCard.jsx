import { useState } from "react";
import { CiCalendarDate } from "react-icons/ci";

const NewsCard = ({ news }) => {
  const [showText, setShowText] = useState(false);
  const { img, title, subtitle, date } = news;

  const toggleText = () => {
    setShowText((prev) => !prev);
  };

  return (
    <div className="w-full max-w-sm mx-auto sm:max-w-full cShadow rounded-md overflow-hidden bg-white  p-3">
      <div className=" rounded-md overflow-hidden group">
        <img
          src={img}
          alt="news image"
          className="max-w-full w-full  group-hover:scale-105 transition"
        />
      </div>
      <div className="p-3">
        <div className="">
          <h1 className="text-3xl mb-1 text-gray-800 font-medium">{title}</h1>

          {showText ? (
            <>
              <p className="text-gray-700 text-sm sm:text-base">
                <span>{subtitle}</span>
              </p>
            </>
          ) : (
            <>
              <p className="text-gray-700 text-sm sm:text-base">
                {subtitle.length > 100 && (
                  <span>{subtitle.slice(1, 100)}...</span>
                )}
              </p>
            </>
          )}
        </div>
        <div className="flex  justify-between items-center my-2">
          <span className="font-semibold text-gray-600 text-sm flex items-center gap-1">
            <CiCalendarDate className="text-gray-700" /> {date}
          </span>
          <button
            onClick={toggleText}
            className=" py-1  px-2 rounded-sm capitalize font-medium border-primary-1 border  text-primary-1 text-sm transition-all hover:text-gray-100 hover:bg-primary-1"
          >
            {showText ? "read less" : "read more"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
