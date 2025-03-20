import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@pages/Home";
import Terms from "@pages/Terms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/terms",
    element: <Terms />,
  },
  // {
  //   path: '*',
  //   element: <NotFound />,
  // },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
