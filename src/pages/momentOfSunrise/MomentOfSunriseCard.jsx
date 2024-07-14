/* eslint-disable react/prop-types */
import React from 'react';
import dateFormatter from '../../utils/dateFormatter';

const MomentOfSunriseCard = ({ moment }) => {
  const { title, date, image } = moment;

  return (
    <div className="cShadow rounded-md w-full overflow-hidden hoverEffect group transition duration-300">
      <div className="overflow-hidden w-full">
        <img
          src={image}
          alt="moment image"
          className="group-hover:scale-105 transition w-full h-full object-cover max-h-48 "
        />
      </div>
      <div className="space-y-3 py-3 px-2">
        <h2 className="text-2xl font-medium text-center text-gray-800 md:text-xl">{title}</h2>
        <p className="text-gray-600 text-sm text-center">{dateFormatter(date)}</p>
      </div>
    </div>
  );
};

export default MomentOfSunriseCard;
