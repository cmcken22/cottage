import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  // {
  //   path: '/about',
  //   element: <About />,
  // },
  // {
  //   path: '*',
  //   element: <NotFound />,
  // },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
