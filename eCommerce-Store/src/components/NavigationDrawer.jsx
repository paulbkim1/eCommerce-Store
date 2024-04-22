import { NavLink } from "react-router-dom";

const NavigationDrawer = ({ toggleDrawer }) => {
  const handleDrawerClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed sm:hidden top-0 left-0 w-full h-full bg-black bg-opacity-50 z-20"
      onClick={toggleDrawer}
    >
      <div
        className="bg-white w-3/5 min-w-[150px] max-w-[300px] h-full relative"
        onClick={handleDrawerClick}
      >
        <button
          onClick={toggleDrawer}
          className="absolute top-2 right-2 text-2xl hover:scale-110"
        >
          &#10006;
        </button>
        <h2 className="border-b border-gray-400 text-center h-[8vh] text-3xl flex items-center justify-center">
          Menu
        </h2>
        <ul className="flex mt-6 flex-col gap-4 items-center">
          <li className="hover:scale-110">
            <NavLink to="/" className="text-xl" onClick={toggleDrawer}>
              Home
            </NavLink>
          </li>
          <li className="hover:scale-110">
            <NavLink to="products/1" className="text-xl" onClick={toggleDrawer}>
              Products
            </NavLink>
          </li>
          <li className="hover:scale-110">
            <NavLink
              to="categories/all"
              className="text-xl"
              onClick={toggleDrawer}
            >
              Categories
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationDrawer;
