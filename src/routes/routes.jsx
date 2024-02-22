import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../Layouts/MainLayout";
import About from "../pages/About";
import DonationDetails from "../pages/donation/DonationDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "donation-details",
        element: <DonationDetails />,
      },
    ],
  },
]);

export default router;
