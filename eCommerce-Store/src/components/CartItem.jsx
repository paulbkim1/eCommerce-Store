import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import { Link } from "react-router-dom";
import { quantitySelector } from "../ui/quantitySelector";

const CartItem = ({ item, onClick }) => {
  const { id, title, image, quantity, totalPrice } = item;
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(cartActions.removeItem(id));
  };
  const handleDecrementQuantity = () => {
    dispatch(cartActions.adjustQuantity({ id, quantity: -1 }));
  };
  const handleIncrementQuantity = () => {
    dispatch(cartActions.adjustQuantity({ id, quantity: 1 }));
  };

  function getFirstFourWords(inputString) {
    const words = inputString.split(/\s+/);

    const result = words.slice(0, 4).join(" ");

    return result;
  }

  return (
    <li className="flex flex-col sm:flex-row py-4 gap-2 items-center sm:items-stretch">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img src={image} alt="" className="h-full w-full object-contain p-2" />
      </div>
      <div className="ml-4 flex flex-1 flex-col gap-2">
        <div className="flex flex-col sm:flex-row sm:justify-between text-center sm:text-left gap-2 sm:gap-8 text-base font-medium text-gray-900">
          <h3 className="hover:text-blue-500 flex-wrap">
            <Link to={`/products/${id}`} onClick={onClick}>
              {getFirstFourWords(title)}
            </Link>
          </h3>
          <p>${totalPrice.toFixed(2)}</p>
        </div>
        <div className="flex flex-col sm:flex-row flex-1 items-center sm:items-end justify-between gap-2 flex-wrap text-sm">
          {quantitySelector(
            quantity,
            handleDecrementQuantity,
            handleIncrementQuantity
          )}
          <div className="flex">
            <button
              onClick={handleRemoveItem}
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
