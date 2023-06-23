import { Navigate, useRoutes } from "react-router-dom";

// ----------------Page -----------
import DashboardLayout from "./layouts/dashboard/DashboardLayout";
import SimpleLayout from "./layouts/simple/SimpleLayout";
import BlogPage from "./pages/BlogPage";
import DashboardAppPage from "./pages/DashboardAppPage";
import LoginPage from "./pages/LoginPage";
import Page404 from "./pages/Page404";
import ProductsPage from "./pages/ProductsPage";
import UserPage from "./pages/UserPage";

// --------------EndPage----------
export default function Router() {
  const routes = useRoutes([
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          element: <Navigate to={"app"} />,
          index: true,
        },
        {
          path: "app",
          element: <DashboardAppPage />,
        },
        {
          path: "user",
          element: <UserPage />,
        },
        {
          path: "blog",
          element: <BlogPage />,
        },
        {
          path: "products",
          element: <ProductsPage />,
        },
      ],
    },
    {
      element: <SimpleLayout />,
      children: [
        {
          path: "/404",
          element: <Page404 />,
        },
        {
          path: "*",
          element: <Navigate to={"/dashboard"} />,
        },
      ],
    },
    {
      path: "login",
      element: <LoginPage />,
    },

    {
      path: "*",
      element: <Navigate to="/404" />,
    },
  ]);

  return routes;
}
