import React, { useState } from 'react';
import { toast } from 'sonner';
import { useCreateHomeSliderMutation } from '../../../redux/features/homeSlider/homeSliderApi';

import { useNavigate } from 'react-router-dom';

const CreateHomeSlider = () => {
  const [createHomeSlider, { isLoading }] = useCreateHomeSliderMutation();
  const [images, setImages] = useState([]);

  const navigate = useNavigate();

  const fileOnchange = (e) => {
    setImages(Array.from(e.target.files));
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    try {
      for (let i = 0; i < images.length; i++) {
        formData.append('image', images[i]);
      }
      const res = await createHomeSlider(formData).unwrap();
      if (res?.success) {
        toast.success(res?.message);
        setImages([]);
        navigate('/dashboard/all-homeslider');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form onSubmit={formSubmit} className="w-full max-w-sm mx-auto shadow-sm p-4">
        <div className="border-2 border-dashed border-purple-300 p-3 cursor-pointer w-full mb-3">
          <label htmlFor="images" className="text-center block w-full">
            Upload images
          </label>
          <input onChange={fileOnchange} type="file" multiple={true} id="images" hidden />

          <div className="flex gap-3  items-center">
            {images?.map((image, index) => (
              <div key={index} className="max-w-16 w-full border p-2 rounded-md">
                <img src={URL.createObjectURL(image)} alt="Slider Image" />
              </div>
            ))}
          </div>
        </div>

        <button
          type="submit"
          disabled={images.length === 0 || isLoading}
          className={`w-full bg-purple-400 hover:bg-purple-500 transition py-2 px-1 rounded-md text-white ${images.length == 0 && 'bg-gray-400 cursor-not-allowed hover:bg-gray-500'}`}>
          {isLoading ? 'Creating...' : 'Create Slider'}
        </button>
      </form>
    </div>
  );
};

export default CreateHomeSlider;
