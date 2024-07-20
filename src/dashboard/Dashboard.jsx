import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Dashboard = () => {
  return (
    // ! dasboard design
    <div className="w-full min-h-screen h-full">
      <div className="w-full h-full grid grid-cols-[10rem_1fr]">
        {/* ! sidebar */}
        <aside className="bg-neutral-800 min-h-screen py-2 px-1">
          <Link to="/" className="text-neutral-100 my-2 block text-center border-b-2 pb-2">
            SUNRISE
          </Link>
          <div>
            <Sidebar />
          </div>
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
