import React, { useState } from "react";
import FireParticles from "./Components/Particles";
import LampString from "./Components/LampString";
import { motion, useMotionValue } from "framer-motion";
import "./index.css"; // Add your CSS file for styling

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const dragY = useMotionValue(0);

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
    <div className={`h-screen overflow-y relative ${isDarkTheme ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}>
      {/* FireParticles and initial content */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 z-10 overflow-hidden">
        <FireParticles theme={isDarkTheme ? "dark" : "light"} />
      </motion.div>
      <motion.div 
        className="relative z-20 text-center h-screen flex flex-col items-center justify-center"
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        style={{ cursor: "grab" }}
        dragElastic={0.1}
        dragMomentum={false}
        onDrag={handleDrag}
        dragY={dragY}
      >
        <LampString />
        <h3 className={`text-9xl font-jp ${isDarkTheme ? "text-white" : "text-black"}`}>
          リテシュ・マハレ
        </h3>
        <h3 className={`text-5xl ${isDarkTheme ? "text-white" : "text-gray-800"}`} style={{ fontFamily: "Kolker Brush", fontStyle: "cursive" }}>
          Student, Son, and Backend Developer
        </h3>
        <button
          onClick={toggleTheme}
          className={`mt-4 px-4 py-2 rounded ${isDarkTheme ? "bg-white text-gray-800" : "bg-gray-800 text-white"}`}
        >
          {isDarkTheme ? "Switch to Light Theme" : "Switch to Dark Theme"}
        </button>
      </motion.div>

      {/* Scroll-triggered section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className={`min-h-screen flex items-center justify-center ${isDarkTheme ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}
        style={{ marginTop: "100vh", padding: "4rem 0" }}
      >
        <h1 className="text-4xl font-bold">Hello</h1>
        {/* Add content for your "Hello" section here */}
      </motion.div>
    </div>
  );
}
