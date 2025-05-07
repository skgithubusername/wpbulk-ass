// Project: jobify








import React from "react";
import './index.css'
import ReactDOM from "react-dom/client";
import App from "./App";
import { JobProvider } from "./JobContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <JobProvider>
      <App />
    </JobProvider>
  </React.StrictMode>
);
