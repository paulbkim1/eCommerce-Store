import {
  json,
  useLoaderData,
  useParams,
  useRouteLoaderData,
} from "react-router-dom";
import { renderStars } from "../ui/ratingStars";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import { quantitySelector } from "../ui/quantitySelector";
import NowTrending from "../components/NowTrending";

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const id = useParams();
  const { title, image, description, price, rating } = useLoaderData();
  const products = useRouteLoaderData("products");

  function handleDecrementQuantity() {
    if (quantity > 1) {
      setQuantity((prevQuantity) => (prevQuantity -= 1));
    } else return;
  }

  function handleIncrementQuantity() {
    setQuantity((prevQuantity) => (prevQuantity += 1));
  }

  function handleAddItem() {
    dispatch(
      cartActions.addItem({
        id: id.id,
        title,
        image,
        price,
        quantity,
      })
    );
  }

  return (
    <>
      <h1 className="text-center font-semibold text-[clamp(1.5rem,6vw,2rem)]  mb-10">
        {title}
      </h1>
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-24 mb-4">
        <div className="flex-1 px-[6vw] sm:px-0">
          <img src={image} alt="" />
        </div>
        <div className="flex-1 flex flex-col gap-4 sm:gap-6 justify-center">
          <p className=" text-lg">{description}</p>
          <div className="flex gap-2 flex-wrap">
            <p>{rating.rate}</p>
            <div className="flex">{renderStars(rating.rate)}</div>
            <p>{rating.count} ratings</p>
          </div>
          <div className="flex justify-between items-center gap-4 flex-wrap">
            <h3 className="text-xl font-semibold">Quantity</h3>
            {quantitySelector(
              quantity,
              handleDecrementQuantity,
              handleIncrementQuantity
            )}
            <p className="text-xl font-semibold">${price}</p>
          </div>
          <div className="flex gap-6 flex-wrap">
            <button
              className="flex-1 min-w-[124px] border border-black p-2 hover:scale-105 transition-transform duration-300"
              onClick={handleAddItem}
            >
              ADD TO CART
            </button>
            <button className="flex-1 min-w-[124px] bg-blue-500 p-2 text-white hover:scale-105 transition-transform duration-300">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
      <NowTrending products={products} />
    </>
  );
}

export async function loader({ params }) {
  const id = params.id;

  const response = await fetch("https://fakestoreapi.com/products/" + id);
  if (!response.ok) {
    throw json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    return response;
  }
}
