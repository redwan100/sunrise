/* eslint-disable react/prop-types */
import React from 'react';
import { FaHandHoldingDollar } from 'react-icons/fa6';
import cn from '../../../utils/cn';

const DonationBtn = ({ text = 'button text', icon: Icon = FaHandHoldingDollar, className }) => {
  return (
    <button
      className={cn(
        'bg-gradient-to-br from-green-500 to-green-600 py-2 px-4 rounded-md font-semibold text-lg w-full flex items-center gap-1 text-white hover:bg-gradient-to-br hover:from-green-600 hover:to-green-500 hover:transition duration-400 capitalize',
        className
      )}>
      {text} <Icon />
    </button>
  );
};

export default DonationBtn;
