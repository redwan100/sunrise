import React from 'react';
import { toast } from 'sonner';
import ProgramTable from '../../../components/dashboard/program/ProgramTable';
import {
  useAllProgramQuery,
  useDeleteProgramMutation
} from '../../../redux/features/program/programApi';

const AllProgram = () => {
  const { data: tableData, isLoading } = useAllProgramQuery();
  const [deleteNews] = useDeleteProgramMutation();

  const handleDelete = async (id) => {
    try {
      const res = await deleteNews(id).unwrap();
      console.log(res);
      if (res?.success) {
        toast.success(res?.message);
      }
    } catch (error) {
      console.log(error);
      toast.error('Failed to delete news');
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
          <h1 className="text-2xl font-bold mb-4 text-center">All News</h1>
          <ProgramTable data={tableData} onDelete={handleDelete} onUpdate={handleUpdate} />
        </>
      ) : (
        <>
          <p className="text-3xl sm:text-4xl text-center font-bold">No Data available</p>
        </>
      )}
    </div>
  );
};

export default AllProgram;
