import React, { createContext, useContext, useEffect, useState } from "react";
import useToggle from "../hooks/useToggle";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [editProfile, toggleEditProfile] = useToggle()
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Update isMobile state on screen resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return <GlobalContext.Provider value={{ editProfile, toggleEditProfile, isMobile }}>{children}</GlobalContext.Provider>;
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
