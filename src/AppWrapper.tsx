import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const AppWrapper: React.FC = () => {
  const basename =
    process.env.NODE_ENV === "production" ? "/itai-build-todo-app" : "/";

  return (
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  );
};

export default AppWrapper;
