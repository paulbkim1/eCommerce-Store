import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartDrawer = ({ toggleDrawer }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const grandTotal = useSelector((state) => state.cart.grandTotal);

  const handleDrawerClick = (e) => {
    e.stopPropagation();
  };

  console.log(cartItems);

  return (
    <div
      className="fixed top-0 right-0 w-full h-full bg-black bg-opacity-50 z-20"
      onClick={toggleDrawer}
    >
      <div
        className="flex flex-col bg-white w-3/5 min-w-[180px] sm:min-w-[450px] max-w-[300px] sm:max-w-[550px] h-full absolute right-0"
        onClick={handleDrawerClick}
      >
        <div className="flex justify-between items-center relative border-b border-gray-400 h-[8vh]">
          <button
            className="absolute top-2 left-2 text-2xl hover:scale-110"
            onClick={toggleDrawer}
          >
            &#10006;
          </button>
          <h2 className="flex-1 text-center text-3xl">Cart</h2>
        </div>
        <div className="overflow-y-auto flex-grow px-4 sm:px-6">
          <ul className="my-2 divide-y divide-gray-200">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={{
                  id: item.id,
                  title: item.title,
                  image: item.image,
                  quantity: item.quantity,
                  totalPrice: item.totalPrice,
                }}
                onClick={toggleDrawer}
              />
            ))}
          </ul>
        </div>
        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div className="flex justify-between gap-2 flex-wrap text-base font-medium text-gray-900">
            <p>Subtotal:</p>
            <p>${grandTotal.toFixed(2)}</p>
          </div>
          <p className="mt-1 text-sm  text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <button className="flex items-center justify-center w-full rounded-md border border-transparent bg-blue-500 px-6 py-3 mt-6 text-base font-medium text-white hover:bg-blue-600">
            Checkout
          </button>

          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>
              or{" "}
              <button
                className="font-medium text-blue-600 hover:text-blue-500"
                onClick={toggleDrawer}
              >
                Continue Shopping
                <span> &rarr;</span>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
