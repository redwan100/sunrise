import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Dashboard = () => {
  return (
    // ! dasboard design
    <div className="w-full min-h-screen h-full">
      <div className="w-full h-full grid grid-cols-[8rem_1fr]">
        {/* ! sidebar */}
        <aside className="bg-pink-300 min-h-screen">
          <h3>Dashboard</h3>
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
