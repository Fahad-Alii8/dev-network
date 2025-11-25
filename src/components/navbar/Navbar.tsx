import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-100 dark:bg-gray-100 shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link
          to="/"
          className="text-2xl font-bold text-black dark:text-white hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
        >
          Dev Network
        </Link>

        <div className="flex space-x-6">
          <Link
            to="/"
            className="text-black dark:text-white hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-black dark:text-white hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-black dark:text-white hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
          >
            Contact Us
          </Link>
        </div>

        <button
          className="px-4 py-2 rounded-md bg-black-500 bg-black text-white"
        >
          Add Developer
        </button>
      </div>
    </nav>
  );
}
