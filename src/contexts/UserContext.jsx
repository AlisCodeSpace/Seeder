import React, { createContext, useContext, useState } from "react";

// Create the context
export const UserContext = createContext();

// Context provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Logged-in user state


  const login = (userData) => {
    setUser(userData); // Save user data on login
    localStorage.setItem("loggedInUser", JSON.stringify(userData)); // Persist login in localStorage
  };

  const logout = () => {
    setUser(null); // Clear user data on logout
    localStorage.removeItem("loggedInUser");
  };

  // Hydrate user from localStorage on app load
  React.useEffect(() => {
    const savedUser = localStorage.getItem("loggedInUser");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};


export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
