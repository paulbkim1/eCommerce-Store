export function quantitySelector(
  quantity,
  handleDecrementQuantity,
  handleIncrementQuantity
) {
  return (
    <div className="grid grid-cols-3 w-24">
      <button
        type="button"
        onClick={handleDecrementQuantity}
        className="aspect-square w-full border border-black hover:bg-gray-200"
      >
        -
      </button>
      <p className="aspect-square w-full border border-black flex items-center justify-center">
        {quantity}
      </p>
      <button
        type="button"
        onClick={handleIncrementQuantity}
        className="aspect-square w-full border border-black hover:bg-gray-200"
      >
        +
      </button>
    </div>
  );
}
