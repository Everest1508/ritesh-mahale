// App.js
import React, { useState } from "react";
import Home from "./Pages/Home";
import "./index.css"; // Add your CSS file for styling

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const handleDrag = (event, info) => {
    const dragDistance = info.offset.y;
    const sensitivity = 50;

    if (dragDistance > sensitivity) {
      setIsDarkTheme(true);
    } else if (dragDistance < -sensitivity) {
      setIsDarkTheme(false);
    }
  };

  return (
    <Home
      isDarkTheme={isDarkTheme}
      toggleTheme={toggleTheme}
      handleDrag={handleDrag}
    />
  );
}
