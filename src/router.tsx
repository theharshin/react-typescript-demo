import { useRoutes } from "react-router-dom";
import Home from "./pages/home";
import ProductForm from "./pages/ProductForm";
import DefaultLayout from "./components/layout/DefaultLayout";

const router = () => {
  const routes = [
    {
      path: "/",
      element: <DefaultLayout />,
      children: [
        { path: "", element: <Home /> },
        { path: "product", element: <Home /> },
        { path: "create-product", element: <ProductForm /> },
        { path: "edit-product/:id", element: <ProductForm /> },
      ],
    },
  ];
  const router = useRoutes(routes);
  return <>{router}</>;
};

export default router;
