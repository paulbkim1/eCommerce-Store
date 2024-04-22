import { Link, useRouteLoaderData } from "react-router-dom";
import HomepageCategories from "../components/HomePageCategories";
import happyGirls from "../assets/happy-girls.jpg";
import NowTrending from "../components/NowTrending";

export default function HomePage() {
  const products = useRouteLoaderData("products");

  return (
    <div>
      <HomepageCategories />
      <div className="flex flex-col sm:flex-row sm:my-10">
        <div className="flex-1 text-center mx-auto my-8">
          <h1 className="text-3xl font-bold mb-4">Share Your Smile</h1>
          <p className="text-lg mb-6 px-4 sm:px-10">
            Explore products that embody the latest trends, designed to enhance
            your lifestyle and bring joy to your everyday moments.
          </p>
          <Link
            to="categories/all"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            SHOP NOW
          </Link>
        </div>
        <div className="flex-1">
          <img src={happyGirls} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
      <NowTrending products={products} />
    </div>
  );
}
