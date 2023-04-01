import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Home/Homepage";
import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "../pages/LoginRegister/Login";
// import Home from "../pages/Home/Home";
import Register from "../pages/LoginRegister/Register";
import ForgetPassword from "../pages/LoginRegister/ForgetPassword";
// import Header from "../components/Header";
import PrivateRoute from "../utils/PrivateRoute";
import { AuthProvider } from "../context/AuthContext";
import VerifyEmail from "../pages/LoginRegister/VerifyEmail";
import ResetPassword from "../pages/LoginRegister/ResetPassword";

const Router = () => {
  return (
    <div>
      <AuthProvider>
        {/* <Header /> */}
        <Routes>
          <Route element={<PrivateRoute />}>
            {/* <Route element={<Home />} path="/" /> */}
            <Route path="/" element={<Homepage />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/email-verify" element={<VerifyEmail />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          {/* <Routes>
              <Route path="/" element={<Homepage />} />
            </Routes> */}
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default Router;