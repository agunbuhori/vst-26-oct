import { createBrowserRouter } from "react-router-dom";
import DashboardPage from "../pages/dashboard/DashboardPage";
import LoginPage from "../pages/login/LoginPage";

export default createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },

  {
    path: "/dashboard",
    element: <DashboardPage />,
  },

  {
    path: "/",
    element: <DashboardPage />,
  },
]);
