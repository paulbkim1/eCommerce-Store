import { Link } from "react-router-dom";

import electronics from "../assets/electronics.jpeg";
import Jewelery from "../assets/jewelery.jpg";
import womensFashion from "../assets/womens-fashion.jpeg";
import mensFashion from "../assets/mens-fashion.jpg";

export default function HomepageCategories() {
  return (
    <div className="flex flex-col w-full sm:flex-row gap-4 relative">
      <Link
        to="categories/men's fashion"
        className="relative w-full sm:w-1/2 aspect-square hover:scale-105 transition-transform duration-300"
      >
        <img src={mensFashion} alt="" className="w-full h-full" />
        <p className="absolute left-0 right-0 bottom-5 text-white text-center flex items-center justify-center text-[clamp(0.7rem,4vw,2rem)]  font-bold">
          Men's Fashion
        </p>
      </Link>
      <div className="flex gap-4 w-full sm:w-1/2 aspect-square">
        <Link
          to="categories/women's fashion"
          className="relative w-1/2 h-full hover:scale-105 transition-transform duration-300"
        >
          <img src={womensFashion} alt="" className="w-full h-full" />
          <p className="absolute left-0 right-0 bottom-5 text-white text-center flex items-center justify-center text-[clamp(0.7rem,4vw,2rem)] font-bold">
            Women's fashion
          </p>
        </Link>

        <div className="w-1/2 flex flex-col">
          <Link
            to="categories/jewelery"
            className="relative h-1/2 pb-2 hover:scale-105 transition-transform duration-300"
          >
            <img src={Jewelery} alt="" className="w-full h-full" />
            <p className="absolute left-0 right-0 bottom-5 text-white text-center flex items-center justify-center text-[clamp(0.7rem,4vw,2rem)]  font-bold">
              Jewelery
            </p>
          </Link>
          <Link
            to="categories/electronics"
            className="relative h-1/2 pt-2 hover:scale-105 transition-transform duration-300"
          >
            <img src={electronics} alt="" className="w-full h-full" />
            <p className="absolute left-0 right-0 bottom-5 text-white text-center flex items-center justify-center text-[clamp(0.7rem,4vw,2rem)] font-bold">
              Electronics
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
