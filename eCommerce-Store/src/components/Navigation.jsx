import { NavLink } from "react-router-dom";
import { useState } from "react";
import { MdMenu, MdShoppingCart } from "react-icons/md";
import NavigationDrawer from "./NavigationDrawer";
import CartDrawer from "./CartDrawer";

export default function LandingNavigation() {
  const [activeDrawer, setActiveDrawer] = useState(null);

  const toggleDrawer = (drawerType) => {
    if (activeDrawer === drawerType) {
      setActiveDrawer(null);
    } else {
      setActiveDrawer(drawerType);
    }
  };

  return (
    <>
      <header className="flex items-center justify-center h-[8vh] border-b border-gray-400 fixed top-0 left-0 right-0 bg-white w-auto z-10">
        <nav className="max-w-[500px] sm:max-w-[900px] px-[10px] sm:px-[20px] flex justify-between items-center w-full">
          <NavLink
            to=""
            className="text-2xl font-bold hidden sm:block hover:scale-110 transition-all duration-300"
          >
            HappyHaul
          </NavLink>
          <button
            onClick={() => toggleDrawer("navigation")}
            className="sm:hidden"
          >
            <MdMenu className="text-3xl hover:scale-110 transition-all duration-300" />
          </button>
          <ul className="flex gap-4 sm:gap-6 items-center">
            <li>
              <NavLink
                to="products/1"
                className="text-sm sm:text-base hidden sm:block"
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="categories/all"
                className="text-sm sm:text-base hidden sm:block"
              >
                Categories
              </NavLink>
            </li>
            <li className="flex items-center">
              <button onClick={() => toggleDrawer("cart")}>
                <MdShoppingCart className="text-2xl hover:scale-110" />
              </button>
            </li>
          </ul>
        </nav>
      </header>
      {activeDrawer === "navigation" ? (
        <NavigationDrawer toggleDrawer={() => toggleDrawer("navigation")} />
      ) : activeDrawer === "cart" ? (
        <CartDrawer toggleDrawer={() => toggleDrawer("cart")} />
      ) : null}
    </>
  );
}
