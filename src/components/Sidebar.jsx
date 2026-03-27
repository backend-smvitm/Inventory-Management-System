import React from "react";
import { NavLink } from "react-router-dom";
import { menuItems } from "./navigation";

export default function Sidebar({ open, onClose }) {
  return (
    <div
      className={`fixed inset-0 z-30 bg-slate-950/50 transition-opacity duration-200 md:hidden ${
        open ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        className={`h-full w-72 transform bg-slate-900 p-6 text-white transition-transform duration-200 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.35em] text-blue-300">
            Inventory
          </p>
          <h2 className="mt-2 text-2xl font-bold">StockFlow</h2>
        </div>

        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `block rounded-lg px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-blue-600 text-white shadow"
                      : "text-slate-200 hover:bg-slate-800 hover:text-blue-300"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
