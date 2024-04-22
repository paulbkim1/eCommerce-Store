export function renderStars(rating) {
  const starArray = [];
  let stars = Math.round(rating);

  for (let i = 0; i < 5; i++) {
    if (stars > 0) {
      starArray.push(
        <span key={i} className="text-yellow-500">
          &#9733;
        </span>
      );
    } else if (stars <= 0) {
      starArray.push(
        <span key={i} className="text-gray-300">
          &#9734;
        </span>
      );
    }
    stars -= 1;
  }

  return starArray;
}
