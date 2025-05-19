import React from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { path: "/", name: "Todo App" },
  { path: "/app2", name: "Future App 2" },
  { path: "/app3", name: "Future App 3" },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-64 bg-white shadow-lg p-4">
      <h1 className="text-2xl font-bold text-blue-600 mb-6">My Projects</h1>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`block px-4 py-2 rounded hover:bg-blue-100 ${
                location.pathname === link.path
                  ? "bg-blue-200 font-semibold"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
