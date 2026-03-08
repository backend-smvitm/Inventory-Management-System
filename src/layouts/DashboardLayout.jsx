import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar for medium+ screens */}
      <div className="hidden md:block w-64 bg-gray-900 text-white p-6">
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

      {/* Mobile sidebar overlay */}
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main section */}
      <div className="flex-1 flex flex-col">
        <Navbar onToggleSidebar={() => setSidebarOpen(true)} />
        <main className="p-6 flex-1 bg-gray-100">{children}</main>
      </div>
    </div>
  );
}
