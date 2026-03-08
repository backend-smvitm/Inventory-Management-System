import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function Navbar({ onToggleSidebar }) {
  const navigate = useNavigate();

  const logout = () => {
    // clear any auth flag and redirect
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        {/* hamburger for mobile */}
        <button
          className="md:hidden text-gray-700 hover:text-gray-900"
          onClick={onToggleSidebar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <h1 className="text-xl font-semibold">Dashboard</h1>
      </div>

      <Button text="Logout" onClick={logout} className="w-auto" />
    </nav>
  );
}
