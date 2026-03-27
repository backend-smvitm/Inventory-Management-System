import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";
import { getPageTitle } from "./navigation";

export default function Navbar({ onToggleSidebar }) {
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-4 shadow-sm sm:px-6">
      <div className="flex items-center gap-4">
        <button
          className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
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

        <div>
          <h1 className="text-lg font-semibold text-slate-900 sm:text-xl">
            {getPageTitle(location.pathname)}
          </h1>
          <p className="text-sm text-slate-500">Inventory Management System</p>
        </div>
      </div>

      <Button text="Logout" onClick={logout} fullWidth={false} />
    </nav>
  );
}
