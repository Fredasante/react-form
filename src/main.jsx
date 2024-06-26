import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./context/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main className="bg-[#E3FEF7] w-full min-h-screen flex justify-center">
      <AuthProvider>
        <App />
      </AuthProvider>
    </main>
  </React.StrictMode>
);
