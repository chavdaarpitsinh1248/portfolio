import { NavLink } from "react-router-dom";

function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-400 border-b-2 border-blue-400 pb-1"
      : "hover:text-blue-400";

  return (
    <nav className="flex justify-between items-center px-6 sm:px-8 py-4 bg-gray-900 text-white sticky top-0 z-50">
      <h1 className="text-xl font-bold">Arpit</h1>

      <div className="flex gap-6">
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/projects" className={linkClass}>
          Projects
        </NavLink>
        <NavLink to="/contact" className={linkClass}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
