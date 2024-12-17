import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import PrivateRoutes from "./PrivateRoutes";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Jobs from "../pages/Jobs";
import Companies from "../pages/Companies";
import Applications from "../pages/Applications";
import Profile from "../pages/Profile";
import ForgotPassword from "../pages/ForgotPassword";
import JobDetails from "../components/jobs/JobDetails";

const AppRoutes = () => {
  return (
    <BrowserRouter future={{ v7_relativeSplatPath: true }}>
      <Routes>
        <Route index path="/" element={<Navigate to="jobs"/>} />
        <Route path="/" element={<Home />}>
          {/* Nested Routes for Home */}
          <Route path="jobs" element={<Jobs />} />
          <Route path="companies" element={<Companies />} />
          <Route path="applications" element={<Applications />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="jobs/:id" element={<JobDetails />} />

        {/*Other Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpass" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
