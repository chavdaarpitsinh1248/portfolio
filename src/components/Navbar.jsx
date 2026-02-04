import { NavLink } from "react-router-dom";
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
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">
        {/* Left: Brand */}
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          Arpit
        </h1>

        {/* Right: Nav links + theme toggle */}
        <div className="flex items-center gap-6">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/projects" className={linkClass}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>

          {/* Theme Toggle Icon */}
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
