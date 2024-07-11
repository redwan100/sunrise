import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Dashboard = () => {
  return (
    // ! dasboard design
    <div className="w-full h-screen">
      <div className="w-full h-full grid grid-cols-[8rem_1fr]">
        {/* ! sidebar */}
        <aside className="bg-pink-300">
          <h3>Dashboard</h3>
          <div>
            <Sidebar />
          </div>
        </aside>
        {/* ! sidebar */}

        <div className="w-full left-[10rem]">
          {/* navbar  */}
          <div className="shadow-md w-full h-max px-3 py-4">navbar</div>
          {/* navbar  */}

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
