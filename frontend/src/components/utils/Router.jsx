import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Login from "../../routes/auth/Login";
import Signup from "../../routes/auth/Signup";
import Home from "../../routes/Home";
import Dashboard from "../../routes/dashboard/Dashboard";
import NotFound from "../../routes/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/auth",
    children: [
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <NotFound />,
    children: [],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;