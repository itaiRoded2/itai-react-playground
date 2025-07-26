import React, { Suspense } from "react";

import Sidebar from "./components/Sidebar";

import AppRoutes from "router/routes";
import { ToastContainer } from "react-toastify";

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <ToastContainer />
      {/* <main className="flex-1 p-6"> */}
      <main className="flex-1">
        <Suspense fallback={<div className="p-6">Loading content...</div>}>
          <AppRoutes />
        </Suspense>
      </main>
    </div>
  );
};

export default App;
