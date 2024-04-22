import {
  NavLink,
  Link,
  json,
  useLoaderData,
  useNavigate,
  useLocation,
  useNavigation,
} from "react-router-dom";
import Card from "../components/Card";
import LoadingSpinner from "../ui/LoadingSpinner";

export default function CategoriesPage() {
  const categoryItems = useLoaderData();
  const navigate = useNavigate();
  const { state } = useNavigation();
  const location = useLocation();

  const handleSelectChange = (event) => {
    const category = event.target.value;
    navigate(`/categories/${category}`);
  };

  const category = decodeURIComponent(
    location.pathname.split("/").pop()
  ).replace(/[0-9]/g, "");

  let content;
  if (state === "loading") {
    content = <LoadingSpinner />;
  } else if (state === "error") {
    content = <div>Error! Could not fetch products.</div>;
  } else {
    content = (
      <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(190px,1fr))] gap-3 mt-10">
        {categoryItems.map((item) => (
          <Card
            className="object-contain p-4 hover:scale-105 transition-transform duration-300 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex-shrink-0"
            image={item.image}
            price={item.price}
            rating={item.rating.rate}
            id={item.id}
          >
            <h1 className="text-sm font-semibold my-2">{item.title}</h1>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="flex w-full p-4">
        <Link to="/">&lt; Home</Link>
      </div>
      <div className="sm:hidden">
        <select
          onChange={handleSelectChange}
          className="w-full p-2 border border-gray-800"
          value={category}
        >
          <option value="" disabled>
            Select a Category
          </option>
          <option value="all">All Categories</option>
          <option value="men's fashion">Men's Fashion</option>
          <option value="women's fashion">Women's Fashion</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
        </select>
      </div>
      <div className="hidden sm:flex gap-2 justify-center">
        <NavLink
          to="/categories/all"
          className={({ isActive }) =>
            isActive
              ? `border border-gray-800 border-solid p-2 text-sm transition duration-300 hover:bg-gray-200 bg-gray-200`
              : `border border-gray-800 border-solid p-2 text-sm transition duration-300 hover:bg-gray-200`
          }
        >
          All Categories
        </NavLink>
        <NavLink
          to="/categories/men's fashion"
          className={({ isActive }) =>
            isActive
              ? `border border-gray-800 border-solid p-2 text-sm transition duration-300 hover:bg-gray-200 bg-gray-200`
              : `border border-gray-800 border-solid p-2 text-sm transition duration-300 hover:bg-gray-200`
          }
        >
          Men's Fashion
        </NavLink>
        <NavLink
          to="/categories/women's fashion"
          className={({ isActive }) =>
            isActive
              ? `border border-gray-800 border-solid p-2 text-sm transition duration-300 hover:bg-gray-200 bg-gray-200`
              : `border border-gray-800 border-solid p-2 text-sm transition duration-300 hover:bg-gray-200`
          }
        >
          Women's Fashion
        </NavLink>
        <NavLink
          to="/categories/jewelery"
          className={({ isActive }) =>
            isActive
              ? `border border-gray-800 border-solid p-2 text-sm transition duration-300 hover:bg-gray-200 bg-gray-200`
              : `border border-gray-800 border-solid p-2 text-sm transition duration-300 hover:bg-gray-200`
          }
        >
          Jewelery
        </NavLink>
        <NavLink
          to="/categories/electronics"
          className={({ isActive }) =>
            isActive
              ? `border border-gray-800 border-solid p-2 text-sm transition duration-300 hover:bg-gray-200 bg-gray-200`
              : `border border-gray-800 border-solid p-2 text-sm transition duration-300 hover:bg-gray-200`
          }
        >
          Electronics
        </NavLink>
      </div>
      {content}
    </>
  );
}

export async function loader({ params }) {
  try {
    const category = params.category || "";
    let categoryName = `category/${category}`;
    if (category === "all" || category === "") {
      categoryName = "";
    } else if (category === "men's fashion") {
      categoryName = "category/men's clothing";
    } else if (category === "women's fashion") {
      categoryName = "category/women's clothing";
    }

    const response = await fetch(
      `https://fakestoreapi.com/products/${categoryName}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    throw json({ message: "Could not fetch products." }, { status: 500 });
  }
}
