import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
// import TodoApp from "./pages/TodoApp";
// import ComingSoon from "./pages/ComingSoon";
import React from "react";
import ItaiReactApp from "app/pages/ItaiReactApp";

export default function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<ItaiReactApp />} />
          {/* <Route path="/app2" element={<ComingSoon />} />
          <Route path="/app3" element={<ComingSoon />} /> */}
        </Routes>
      </main>
    </div>
  );
}
