import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar({ open, onClose }) {
  // `open` is used for mobile toggle
  return (
    <div
      className={`fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden transition-opacity duration-200 ${
        open ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        className={`w-64 bg-gray-900 text-white h-full p-6 transform transition-transform duration-200 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold mb-8">MyApp</h2>

        <ul className="space-y-4">
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `block hover:text-blue-400 ${isActive ? "text-blue-400" : ""}`
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `block hover:text-blue-400 ${isActive ? "text-blue-400" : ""}`
              }
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              className="block hover:text-blue-400 cursor-pointer"
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              className="block hover:text-blue-400 cursor-pointer"
            >
              Settings
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
