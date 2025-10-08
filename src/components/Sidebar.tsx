// Sidebar.tsx
import React from "react";
import { NavLink } from "react-router-dom";

interface NavItemProps {
  to: string;
  children: React.ReactNode;
  end?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ to, children, end }) => (
  <li>
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        isActive
          ? "block px-4 py-2 rounded bg-blue-800 font-bold"
          : "block px-4 py-2 rounded hover:bg-blue-700"
      }
    >
      {children}
    </NavLink>
  </li>
);

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-blue-600 text-white p-6 min-h-screen">
      <h2 className="text-xl font-semibold mb-6">Itai React play</h2>
      <nav>
        <ul className="space-y-3">
          <NavItem to="/" end>
            Home
          </NavItem>
          <NavItem to="/todos">Todo App</NavItem>
          <NavItem to="/tasks">Tasks</NavItem>
          <NavItem to="/Askdocs">Ask docs AI</NavItem>
          <NavItem to="/AngularInreact">Angular In react</NavItem>
          {/* <NavItem to="/future3">Future3 App</NavItem>
          <NavItem to="/future4">Future4 App</NavItem>
          <NavItem to="/future5">Future5 App</NavItem>
          <NavItem to="/future6">Future6 App</NavItem> */}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
