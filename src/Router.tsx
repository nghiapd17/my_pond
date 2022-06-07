import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import "./App.css";

const Router = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="container">
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default Router;
