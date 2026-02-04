import { NavLink, Link } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";
import useTheme from "../hooks/useTheme";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const linkClass = ({ isActive }) =>
    `pb-1 transition-colors ${
      isActive
        ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400"
        : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="w-full px-6 sm:px-8 py-4 grid grid-cols-3 items-center">
        
        {/* LEFT: Brand */}
        <div className="justify-self-start">
          <Link
            to="/"
            className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Arpit
          </Link>
        </div>

        {/* CENTER: Role */}
        <div className="justify-self-center">
          <span className="text-sm sm:text-base font-large text-gray-600 dark:text-gray-400">
            Python Developer
          </span>
        </div>

        {/* RIGHT: Nav links + theme toggle */}
        <div className="justify-self-end flex items-center gap-6">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/projects" className={linkClass}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500 transition-colors"
          >
            {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
