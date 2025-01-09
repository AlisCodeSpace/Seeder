import React from "react";

import './App.css'
import './styles/input.css'
import './styles/links.css'
import './styles/animations.css'
import './styles/nextui.css'


import AppRoutes from "./routes/AppRoutes"; 

const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <AppRoutes /> 
    </div>
  );
};

export default App;
