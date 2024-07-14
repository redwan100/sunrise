import React from 'react';
import { MdOutlineDelete } from 'react-icons/md';
import { toast } from 'sonner';
import {
  useDeleteHelpPoorPeopleMutation,
  useGetHelpPoorPeopleQuery
} from '../../../redux/features/helpPoorPeople/helpPoorPeople';

const AllHelpPoorPeople = () => {
  const { data, isLoading } = useGetHelpPoorPeopleQuery();

  const [deleteHelpPoorPeople] = useDeleteHelpPoorPeopleMutation();

  const handleDelete = async (id) => {
    try {
      const res = await deleteHelpPoorPeople(id).unwrap();

      if (res?.success) {
        toast.success(res?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="overflow-x-auto">
      {!isLoading ? (
        <>
          <table className="min-w-full bg-white border-collapse shadow-md">
            <thead>
              <tr className="bg-gray-800 text-white text-sm">
                <th className="py-3 px-6 text-left">Image</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="py-3 px-6">
                    <img
                      src={item.url}
                      alt={item.title}
                      className="h-16 object-cover rounded-md max-w-16 w-full"
                    />
                  </td>

                  <td className="py-3 px-2 text-center">
                    <button
                      className="bg-red-100 hover:bg-red-200 text-red-500 p-1 rounded mr-2 transition"
                      onClick={() => handleDelete(item._id)}>
                      <MdOutlineDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <>
          <p>No Data available</p>
        </>
      )}
    </div>
  );
};

export default AllHelpPoorPeople;
