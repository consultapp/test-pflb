import { createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/products/",
    element: <ProductsPage />,
  },
  {
    path: "/products/:categorySlug/:page?",
    element: <CategoryPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
