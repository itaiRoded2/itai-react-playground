// routes.tsx
import { Routes, Route } from "react-router-dom";
import MainContent from "../app/pages/MainContent";
import ItaiReactApp from "../app/pages/ItaiReactApp";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainContent />} />
      <Route path="/todos" element={<ItaiReactApp />} />
    </Routes>
  );
};

export default AppRoutes;
