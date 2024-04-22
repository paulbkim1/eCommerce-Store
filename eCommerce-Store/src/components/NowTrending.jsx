import { useRef } from "react";
import Card from "./Card";

export default function NowTrending({ products }) {
  const containerRef = useRef(null);

  const trendingItems = products.filter(
    (item) =>
      item.id === 4 ||
      item.id === 5 ||
      item.id === 7 ||
      item.id === 9 ||
      item.id === 12 ||
      item.id === 15 ||
      item.id === 18
  );

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="flex justify-between items-center gap-4 mt-10 flex-wrap">
        <p className="text-lg font-semibold">Now Trending</p>
        <div className="flex">
          <button
            className="bg-black text-white w-7 h-7 hover:scale-105"
            onClick={scrollLeft}
          >
            &larr;
          </button>
          <button
            className="bg-black text-white ml-2 w-7 h-7 hover:scale-105"
            onClick={scrollRight}
          >
            &rarr;
          </button>
        </div>
      </div>
      <div
        ref={containerRef}
        className="grid grid-flow-col auto-cols-max gap-3 overflow-x-auto w-full mt-6"
      >
        {trendingItems.map((item) => (
          <Card
            key={item.id}
            className="w-[150px] sm:w-[190px] h-full px-4 py-2 hover:scale-105 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex-shrink-0 transition-transform duration-300"
            image={item.image}
            price={item.price}
            id={item.id}
          >
            <h1 className="text-sm font-semibold my-2">{item.title}</h1>
          </Card>
        ))}
      </div>
    </>
  );
}
