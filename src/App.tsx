import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import React, { Suspense } from "react";
import { lazy } from "react";

// Lazy load components for better performance
const MainContent = lazy(() => import("./app/pages/MainContent"));
const ItaiReactApp = lazy(() => import("./app/pages/ItaiReactApp"));

export default function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6">
        <Suspense fallback={<div className="p-6">Loading content...</div>}>
          <div className="flex-1 bg-gray-100">
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/todo" element={<ItaiReactApp />} />
            </Routes>
          </div>
        </Suspense>
      </main>
    </div>
  );
}
