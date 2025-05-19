import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
// import TodoApp from "./pages/TodoApp";
// import ComingSoon from "./pages/ComingSoon";
import React, { Suspense } from "react";
import ItaiReactApp from "app/pages/ItaiReactApp";
import MainContent from "app/pages/MainContent";

export default function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6">
        {/* Suspense shows fallback while MainContent is loading */}
        <Suspense fallback={<div className="p-6">Loading content...</div>}>
          <main className="flex-1 bg-gray-100">{/* <MainContent /> */}</main>
        </Suspense>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/todo" element={<ItaiReactApp />} />
        </Routes>
      </main>
    </div>
  );
}
