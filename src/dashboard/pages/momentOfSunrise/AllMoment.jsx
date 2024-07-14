import React from 'react';
import { toast } from 'sonner';
import MomentTable from '../../../components/dashboard/momentOfSunrise/MomentTable';
import {
  useDeleteMomentMutation,
  useGetAllMomentQuery
} from '../../../redux/features/momentOfSunrise/momentOfSunriseApi';

const AllMoment = () => {
  const { data: tableData, isLoading } = useGetAllMomentQuery();
  const [deleteMoment] = useDeleteMomentMutation();

  const handleDelete = async (id) => {
    try {
      const res = await deleteMoment(id).unwrap();
      if (res?.success) {
        toast.success(res?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = (id) => {
    // Implement update logic
    // Example:
    console.log(`Update item with id ${id}`);
  };
  return (
    <div>
      {!isLoading ? (
        <>
          <h1 className="text-2xl font-bold mb-4 text-center">All Moment</h1>
          <MomentTable data={tableData} onDelete={handleDelete} onUpdate={handleUpdate} />
        </>
      ) : (
        <>
          <p className="text-3xl sm:text-4xl text-center font-bold">Loading...</p>
        </>
      )}
    </div>
  );
};

export default AllMoment;
