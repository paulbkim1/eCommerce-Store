import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-blue-500 py-2 mt-20">
      <div className="flex flex-col gap-4 m-[6vw] justify-center items-center">
        <div className="text-center mb-4">
          <h1 className="text-white text-2xl sm:text-4xl font-bold mb-6">
            Newsletter
          </h1>
          <input
            type="email"
            className="p-1 text-sm sm:text-lg text-md rounded-md"
          />
          <button className="bg-gray-200 text-sm sm:text-lg text-blue-500 hover:bg-gray-300 ml-1 p-1 rounded-md">
            Subscribe
          </button>
        </div>
        <div className="flex justify-center space-x-2 sm:space-x-6 text-white text-sm sm:text-lg">
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
