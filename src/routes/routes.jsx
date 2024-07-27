import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Dashboard from '../dashboard/Dashboard';
import AllHelpPoorPeople from '../dashboard/pages/helpPoorPeople/AllHelpPoorPeople';
import CreateHelpPoorPeople from '../dashboard/pages/helpPoorPeople/CreateHelpPoorPeople';
import AllSlider from '../dashboard/pages/home-slider/AllSlider';
import CreateHomeSlider from '../dashboard/pages/home-slider/CreateHomeSlider';
import AllNews from '../dashboard/pages/news/AllNews';
import CreateNews from '../dashboard/pages/news/CreateNews';
import AllProgram from '../dashboard/pages/program/AllProgram';
import CreateProgram from '../dashboard/pages/program/CreateProgram';
import UpdateProgram from '../dashboard/pages/program/UpdateProgram';
import AllRecentEvent from '../dashboard/pages/recentEvent/AllRecentEvent';

import Login from '../components/shared/form/Login';
import AllMoment from '../dashboard/pages/momentOfSunrise/AllMoment';
import CreateMoment from '../dashboard/pages/momentOfSunrise/CreateMoment';
import CreateRecentEvent from '../dashboard/pages/recentEvent/CreateRecentEvent';
import MainLayout from '../Layouts/MainLayout';
import ProtectRoute from '../Layouts/ProtectRoute';
import About from '../pages/About';
import Contact from '../pages/contact/Contact';
import DonationDetails from '../pages/donation/DonationDetails';
import AllNewses from '../pages/news/AllNews';
import NewsDetails from '../pages/news/NewsDetails';
import AllPrograms from '../pages/program/AllProgram';
import ProgramDetails from '../pages/program/ProgramDetails';

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
        path: 'all-news',
        element: <AllNewses />
      },
      {
        path: 'news/:id',
        element: <NewsDetails />
      },
      {
        path: 'donation-details',
        element: <DonationDetails />
      },
      {
        path: 'all-program',
        element: <AllPrograms />
      },
      {
        path: 'all-program/:id',
        element: <ProgramDetails />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'login',
        element: <Login />
      }
    ]
  },
  {
    path: 'dashboard',
    element: (
      <ProtectRoute>
        <Dashboard />
      </ProtectRoute>
    ),
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
      },
      {
        path: '/dashboard/create-homeslider',
        element: <CreateHomeSlider />
      },
      {
        path: '/dashboard/all-homeslider',
        element: <AllSlider />
      },
      {
        path: '/dashboard/all-recent-event',
        element: <AllRecentEvent />
      },
      {
        path: '/dashboard/create-recent-event',
        element: <CreateRecentEvent />
      },
      {
        path: '/dashboard/create-poor-people',
        element: <CreateHelpPoorPeople />
      },
      {
        path: '/dashboard/all-poor-people',
        element: <AllHelpPoorPeople />
      },
      {
        path: '/dashboard/all-moment',
        element: <AllMoment />
      },
      {
        path: '/dashboard/create-moment',
        element: <CreateMoment />
      }
    ]
  }
]);

export default router;
