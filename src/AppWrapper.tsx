import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const AppWrapper: React.FC = () => {
  // Use same basename for both local and production
  const basename = "/itai-react-playground";

  return (
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  );
};

export default AppWrapper;