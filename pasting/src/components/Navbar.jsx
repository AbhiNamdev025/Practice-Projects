import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 px-8 py-4 shadow-lg">
      <div className="flex flex-row gap-8 items-center justify-between max-w-5xl mx-auto">
        <div className="flex items-center gap-3">
          <span className="text-white text-2xl font-extrabold tracking-wide drop-shadow-lg select-none">
            Notes<span className="text-yellow-300">App</span>
          </span>
        </div>
        <div className="flex flex-row gap-6 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg text-lg font-semibold transition-all duration-200 ${
                isActive
                  ? "bg-yellow-300 text-indigo-800 shadow-md"
                  : "text-white hover:bg-white/10 hover:text-yellow-200"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/pastes"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg text-lg font-semibold transition-all duration-200 ${
                isActive
                  ? "bg-yellow-300 text-indigo-800 shadow-md"
                  : "text-white hover:bg-white/10 hover:text-yellow-200"
              }`
            }
          >
            Notes
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
