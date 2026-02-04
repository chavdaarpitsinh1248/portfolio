import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-900 text-white">
      <h1 className="text-xl font-bold">Arpit</h1>

      <div className="flex gap-6">
        <NavLink to="/" className="hover:text-blue-400">
          Home
        </NavLink>
        <NavLink to="/projects" className="hover:text-blue-400">
          Projects
        </NavLink>
        <NavLink to="/contact" className="hover:text-blue-400">
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
