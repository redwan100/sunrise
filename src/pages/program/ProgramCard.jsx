import React from 'react';
import { BiCalendar } from 'react-icons/bi';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import dateFormatter from '../../utils/dateFormatter';

const ProgramCard = ({ program }) => {
  const { title, image, description, date } = program;

  return (
    <div className="cShadow rounded-md overflow-hidden group bg-white">
      <div className="overflow-hidden w-full max-h-[14rem] h-full">
        <img
          src={image}
          alt="program image"
          className="max-w-full w-full group-hover:scale-110 transition object-cover"
        />
      </div>
      <div className=" px-3 py-2 w-full bg-gray-50">
        <h1 className="text-xl text-gray-700 font-semibold mb-1">{title}</h1>

        <div className="mb-3 text-sm">{description}</div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs font-medium text-gray-500 mb-3">
            <BiCalendar /> {dateFormatter(date)}
          </div>

          <Link
            to={'/'}
            className="transition hover:text-primary-1 flex items-center font-medium text-sm bg-primary-1/10 py-1 px-2  rounded-sm text-primary-1 hover:bg-primary-1/20 ml-auto ">
            Read More <IoIosArrowRoundForward className="text-xl " />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
