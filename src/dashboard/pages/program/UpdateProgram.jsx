import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';
import {
  useSingleProgramQuery,
  useUpdateProgramMutation
} from '../../../redux/features/program/programApi';

const UpdateProgram = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const { programId } = useParams();
  const [updateProgram] = useUpdateProgramMutation();
  const { data, isLoading } = useSingleProgramQuery(programId);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await updateProgram({ id: programId, title, description, date }).unwrap();

      if (res?.success) {
        toast.success(res?.message);
        navigate(-1); // Redirect to the previous page
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {!isLoading ? (
        <>
          {' '}
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
                Title
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none  focus:border-purple-400 hover:border-purple-300"
                id="title"
                type="text"
                placeholder="Enter title"
                defaultValue={data?.title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
                Description
              </label>
              <textarea
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-purple-400 hover:border-purple-300"
                id="description"
                rows="3"
                placeholder="Enter description"
                defaultValue={data?.description}
                onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="date">
                Date
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-purple-400 hover:border-purple-300"
                id="date"
                type="date"
                defaultValue={data?.date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                className="bg-purple-500 w-full hover:bg-purple-600 transition text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit">
                Update Program
              </button>
            </div>
          </form>
        </>
      ) : (
        <>
          <p>Loading...</p>
        </>
      )}
    </div>
  );
};

export default UpdateProgram;
