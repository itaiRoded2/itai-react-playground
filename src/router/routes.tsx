// routes.tsx
import { Routes, Route } from "react-router-dom";
import MainContent from "../app/pages/MainContent";
import ItaiReactApp from "../app/pages/ItaiReactApp";
import TasksPage from "features/tasks/pages/TasksPage";
import AskDocsHome from "features/AskDocs/pages/AskDocsHome";
import AngularInReact from "features/AngularInReact/Pages/AngularInReact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainContent />} />
      <Route path="/todos" element={<ItaiReactApp />} />
      <Route path="/tasks" element={<TasksPage />} />
      <Route path="/Askdocs" element={<AskDocsHome />} />
      <Route path="/AngularInReact" element={<AngularInReact />} />
    </Routes>
  );
};

export default AppRoutes;
