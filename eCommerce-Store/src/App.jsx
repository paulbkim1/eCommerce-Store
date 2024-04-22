import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import CategoriesPage, {
  loader as categoriesLoader,
} from "./pages/CategoriesPage";
import RootLayout, { loader as productsLoader } from "./pages/Root";
import ProductPage, { loader as productLoader } from "./pages/ProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    id: "products",
    loader: productsLoader,
    children: [
      { index: true, element: <HomePage /> },
      { path: "products/:id", element: <ProductPage />, loader: productLoader },
      {
        path: "categories/:category",
        element: <CategoriesPage />,
        loader: categoriesLoader,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
