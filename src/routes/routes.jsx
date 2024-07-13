import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Dashboard from '../dashboard/Dashboard';
import AllNews from '../dashboard/pages/news/AllNews';
import CreateNews from '../dashboard/pages/news/CreateNews';
import AllProgram from '../dashboard/pages/program/AllProgram';
import CreateProgram from '../dashboard/pages/program/CreateProgram';
import UpdateProgram from '../dashboard/pages/program/UpdateProgram';
import MainLayout from '../Layouts/MainLayout';
import About from '../pages/About';
import Contact from '../pages/contact/Contact';
import DonationDetails from '../pages/donation/DonationDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <App />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'donation-details',
        element: <DonationDetails />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard />,
    children: [
      {
        path: '/dashboard/create-news',
        element: <CreateNews />
      },
      {
        path: '/dashboard/all-news',
        element: <AllNews />
      },
      {
        path: '/dashboard/create-program',
        element: <CreateProgram />
      },
      {
        path: '/dashboard/all-program',
        element: <AllProgram />
      },
      {
        path: '/dashboard/:programId',
        element: <UpdateProgram />
      }
    ]
  }
]);

export default router;
