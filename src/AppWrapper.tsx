import App from "App";
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function AppWrapper() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/itai-build-todo-app/" replace />}
        />
        <Route path="/itai-build-todo-app/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppWrapper;
