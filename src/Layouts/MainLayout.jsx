import { Outlet } from 'react-router-dom';
import Footer from '../components/shared/Footer';
import Navbar from '../components/shared/Navbar';

const MainLayout = () => {
  return (
    <div className="relative overflow-x-hidden">
      <div className="w-full min-h-screen flex flex-col ">
        <Navbar />
        <div className="">
          <Outlet />
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
