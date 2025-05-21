// routes.tsx
import { Routes, Route } from "react-router-dom";
import MainContent from "../app/pages/MainContent";
import ItaiReactApp from "../app/pages/ItaiReactApp";
import TasksPage from "features/tasks/pages/TasksPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainContent />} />
      <Route path="/todos" element={<ItaiReactApp />} />
      <Route path="/tasks" element={<TasksPage />} />
    </Routes>
  );
};

export default AppRoutes;
