import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// Router
import { BrowserRouter } from "react-router-dom";

// NavBar
import NavBar from "./components/NavBar.jsx"

// Boostrap Link
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <NavBar/>
      <App />
    </StrictMode>
  </BrowserRouter>,
);
