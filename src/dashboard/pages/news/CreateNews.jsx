import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useCreateNewsMutation } from '../../../redux/features/news/newsApi';
const CreateNews = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [date, setDate] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();

  const [createNews] = useCreateNewsMutation();

  const handleImageChange = (e) => {
    // setImage(e.target.files[0])
    setImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    const data = {
      title,
      description,
      date
    };

    formData.append('image', image);
    formData.append('data', JSON.stringify(data));

    try {
      const res = await createNews(formData).unwrap();

      if (res?.success) {
        toast.success(res?.message);
        navigate('/dashboard/all-news');
      }
    } catch (error) {
      console.log(error);
      if (error?.data?.error?.code === 11000) {
        toast.error('Title is duplicate. change title');
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
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
            value={title}
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>

        <div className="mb-4 border-2 border-dashed border-purple-200">
          <label
            className=" text-gray-700 font-bold py-4 block px-3 cursor-pointer"
            htmlFor="image">
            {' '}
            {imagePreview ? (
              <div className="mb-4 w-14 mx-auto">
                <img src={imagePreview} alt={image} className="w-full h-full" />
              </div>
            ) : (
              ' Upload Image'
            )}
          </label>
          <input
            className="appearance-none border rounded w-full py-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="image"
            type="file"
            hidden
            onChange={handleImageChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="date">
            Date
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-purple-400 hover:border-purple-300"
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-purple-500 w-full hover:bg-purple-600 transition text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateNews;
