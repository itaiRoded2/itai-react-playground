import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import MainContent from "./app/pages/MainContent";
import ItaiReactApp from "./app/pages/ItaiReactApp";

export default function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6">
        <Suspense fallback={<div className="p-6">Loading content...</div>}>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/todos" element={<ItaiReactApp />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}
