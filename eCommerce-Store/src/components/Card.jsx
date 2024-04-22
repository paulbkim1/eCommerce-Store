import { Link } from "react-router-dom";
import { renderStars } from "../ui/ratingStars";

export default function Card({
  className,
  image,
  price,
  rating,
  id,
  children,
}) {
  return (
    <Link to={`/products/${id}`} className={className}>
      <img src={image} alt="" className="object-contain w-full h-40 sm:h-48" />
      {children}
      <div className="flex">{renderStars(rating)}</div>
      <p className="text-sm text-gray-600 mt-2">${price}</p>
    </Link>
  );
}
