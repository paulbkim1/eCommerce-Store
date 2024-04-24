import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-blue-500 py-2 mt-20">
      <div className="flex flex-col gap-6 sm:gap-8 m-4 justify-center items-center">
        <h1 className="text-white text-3xl sm:text-4xl font-bold mb-1">
          Newsletter
        </h1>
        <div className="flex flex-wrap justify-center gap-2 w-full">
          <input
            type="email"
            className="p-1 text-sm sm:text-lg text-md rounded-md w-[80vw] max-w-[200px]"
          />
          <button className="bg-gray-200 text-sm sm:text-lg text-blue-500 hover:bg-gray-300 p-1 rounded-md">
            Subscribe
          </button>
        </div>
        <div className="flex justify-center flex-wrap space-x-2 sm:space-x-6 text-white text-sm sm:text-lg">
          <Link>About</Link>
          <Link>News</Link>
          <Link>Careers</Link>
          <Link>FAQs</Link>
          <Link>Contact Us</Link>
        </div>
      </div>
    </footer>
  );
}
