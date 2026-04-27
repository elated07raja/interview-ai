import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./features/auth/pages/Register.jsx";
import Login from "./features/auth/pages/Login.jsx";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;