import React from 'react';
import { BiLogInCircle } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { logout } from '../redux/features/auth/authSlice';
import Sidebar from './Sidebar';

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());

    navigate('/');
    toast.success('successfully logout');
  };
  return (
    // ! dashboard design
    <div className="w-full min-h-screen h-full">
      <div className="w-full h-full grid grid-cols-[10rem_1fr]">
        {/* ! sidebar */}
        <aside className="bg-neutral-800 min-h-screen py-2 px-1 flex flex-col justify-between">
          <div>
            <Link to="/" className="text-neutral-100 my-2 block text-center border-b-2 pb-2">
              SUNRISE
            </Link>
            <div>
              <Sidebar />
            </div>
          </div>

          {/* // * user info  */}
          <div
            onClick={handleLogout}
            className="text-white flex gap-1 items-center w-max mx-auto mb-10 bg-neutral-700 rounded-md py-1 px-2 cursor-pointer backdrop-blur-xl hover:bg-neutral-600 transition-all duration-300">
            <BiLogInCircle /> Logout
          </div>
          {/* // * user info  */}
        </aside>
        {/* ! sidebar */}

        <div className="w-full left-[10rem]">
          {/* main content  */}
          <div className="w-full p-2">
            <Outlet />
          </div>
          {/* main content  */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
