import React, { createContext, useContext, useState } from "react";
import useToggle from "../hooks/useToggle";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [editProfile, toggleEditProfile] = useToggle()


  return <GlobalContext.Provider value={{ editProfile, toggleEditProfile }}>{children}</GlobalContext.Provider>;
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
