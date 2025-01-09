import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { lazy, Suspense, useEffect } from 'react';

// Load normally
import Home from "../pages/Home";
import Jobs from "../pages/Jobs";
import LoadingScreen from '../skeletons/LoadingScreen';
import Company from "../pages/Company";
import { useGlobalContext } from "../contexts/GlobalContexts";

// Lazy load components
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const Companies = lazy(() => import("../pages/Companies"));
const Applications = lazy(() => import("../pages/Applications"));
const Profile = lazy(() => import("../pages/Profile"));
const ForgotPassword = lazy(() => import("../pages/ForgotPassword"));
const JobDetails = lazy(() => import("../pages/JobDetails"));
const Notifications = lazy(() => import("../pages/Notifications"));
const NotFound = lazy(() => import("../pages/NotFound"));


const AppRoutes = () => {
  const { isMobile } = useGlobalContext()

  useEffect(() => {
    import("../pages/Jobs");
  }, []);

  return (
    <BrowserRouter future={{ v7_relativeSplatPath: true }}>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route index path="/" element={<Navigate to="jobs"/>} />
          <Route path="/" element={<Home />}>
            {/* Nested Routes for Home */}
            <Route path="jobs" element={<Jobs />} />
            <Route path="companies" element={<Companies />} />
            <Route path="applications" element={<Applications />} />
            <Route path="profile" element={<Profile />} />
            <Route path="notifications" element={<Notifications />} />
          </Route>
    
          {/* Other Routes */}  
          <Route path="jobs/:id" element={<JobDetails />} />
          <Route path="companies/:id" element={<Company />} />

          {/*Other Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpass" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />

          {/* Catch-all route for missing routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;