import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  // Optional: log current path or use it for other UI logic
  console.log("Current path:", location.pathname);

  return (
    <aside className="w-64 bg-blue-600 text-white p-6 min-h-screen">
      <h2 className="text-xl font-semibold mb-6">My App</h2>
      <nav>
        <ul className="space-y-3">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? "block px-4 py-2 rounded bg-blue-800 font-bold"
                  : "block px-4 py-2 rounded hover:bg-blue-700"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/todo"
              className={({ isActive }) =>
                isActive
                  ? "block px-4 py-2 rounded bg-blue-800 font-bold"
                  : "block px-4 py-2 rounded hover:bg-blue-700"
              }
            >
              Todo App
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/future"
              className={({ isActive }) =>
                isActive
                  ? "block px-4 py-2 rounded bg-blue-800 font-bold"
                  : "block px-4 py-2 rounded hover:bg-blue-700"
              }
            >
              Future App
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
