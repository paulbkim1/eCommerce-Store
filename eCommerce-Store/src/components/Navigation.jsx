import { NavLink } from "react-router-dom";
import { useState } from "react";
import { MdMenu, MdShoppingCart } from "react-icons/md";
import NavigationDrawer from "./NavigationDrawer";
import CartDrawer from "./CartDrawer";
import { useSelector } from "react-redux";

export default function LandingNavigation() {
  const [activeDrawer, setActiveDrawer] = useState(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const toggleDrawer = (drawerType) => {
    if (activeDrawer === drawerType) {
      setActiveDrawer(null);
    } else {
      setActiveDrawer(drawerType);
    }
  };

  console.log(totalQuantity);

  return (
    <>
      <header className="flex items-center justify-center h-[8vh] border-b border-gray-400 fixed top-0 left-0 right-0 bg-white w-auto z-10">
        <nav className="max-w-[500px] sm:max-w-[900px] px-[16px] sm:px-[20px] flex justify-between items-center w-full">
          <NavLink
            to=""
            className="text-2xl font-bold hidden sm:block hover:scale-110 transition-all duration-300"
          >
            HappyHaul
          </NavLink>
          <MdMenu
            className="text-3xl hover:text-4xl transition-all duration-300 sm:hidden cursor-pointer"
            onClick={() => toggleDrawer("navigation")}
          />

          <ul className="flex gap-4 sm:gap-10 items-center sm:w-60 justify-between mr-5">
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
            <li className="relative">
              <MdShoppingCart
                className="text-2xl hover:text-3xl transition-all duration-300 cursor-pointer"
                onClick={() => toggleDrawer("cart")}
              />
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                  {totalQuantity}
                </span>
              )}
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
