import App from "App";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppWrapper() {
  return (
    // <BrowserRouter basename="/itai-build-todo-app">
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppWrapper;
