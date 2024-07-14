import { FiEdit } from 'react-icons/fi';
import { MdOutlineDelete } from 'react-icons/md';
/* eslint-disable react/prop-types */
import React from 'react';

const MomentTable = ({ data, onDelete, onUpdate }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border-collapse shadow-md">
        <thead>
          <tr className="bg-gray-800 text-white text-sm">
            <th className="py-3 px-6 text-left">Img</th>
            <th className="py-3 px-6 text-left">Title</th>
            <th className="py-3 px-6 text-left">Desc</th>
            <th className="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="py-3 px-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-10 w-10 object-cover rounded-full"
                />
              </td>
              <td className="py-3 px-6">{item.title.slice(0, 20)}...</td>
              <td className="py-3 px-6 ">{item.description?.slice(0, 15)}...</td>
              <td className="py-3 px-2 text-center">
                <button
                  className="bg-red-100 hover:bg-red-200 text-red-500 p-1 rounded mr-2 transition"
                  onClick={() => onDelete(item._id)}>
                  <MdOutlineDelete />
                </button>
                <button
                  className="bg-blue-100 hover:bg-blue-200 text-blue-500 p-1 rounded"
                  onClick={() => onUpdate(item._id)}>
                  <FiEdit />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MomentTable;
