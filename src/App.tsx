import React, { Suspense } from "react";

import Sidebar from "./components/Sidebar";

import AppRoutes from "router/routes";

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6">
        <Suspense fallback={<div className="p-6">Loading content...</div>}>
          <AppRoutes />
        </Suspense>
      </main>
    </div>
  );
};

export default App;
