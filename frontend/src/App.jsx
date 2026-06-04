import {  Routes, Route } from "react-router-dom";

import Hero from "./landing_pages/hero/Hero";
import Login from "./landing_pages/login/Login";
import Register from "./landing_pages/register/Register";
import Dashboard from "./landing_pages/dashboard/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
