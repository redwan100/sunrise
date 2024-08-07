import React from 'react';
import { toast } from 'sonner';
import NewsTable from '../../../components/dashboard/news/Table';
import { useDeleteNewsMutation, useGetAllNewsQuery } from '../../../redux/features/news/newsApi';

const AllNews = () => {
  const { data: tableData, isLoading } = useGetAllNewsQuery();
  const [deleteNews] = useDeleteNewsMutation();

  const handleDelete = async (id) => {
    try {
      const res = await deleteNews(id).unwrap();
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
          <h1 className="text-2xl font-bold mb-4 text-center">All News</h1>
          <NewsTable data={tableData} onDelete={handleDelete} onUpdate={handleUpdate} />
        </>
      ) : (
        <>
          <p className="text-3xl sm:text-4xl text-center font-bold">No Data available</p>
        </>
      )}
    </div>
  );
};

export default AllNews;
