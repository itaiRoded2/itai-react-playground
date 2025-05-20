import App from "App";
import React from "react";
import { BrowserRouter } from "react-router-dom";

function AppWrapper() {
  const basename =
    process.env.NODE_ENV === "production" ? "/itai-build-todo-app" : "/";

  return (
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
