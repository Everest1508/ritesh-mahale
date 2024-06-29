// Components/Home.js
import React from "react";
import FireParticles from "../Components/Particles";
import "../index.css"; // Add your CSS file for styling
import AboutMe from "../Components/AboutMe";
export default function Home({ isDarkTheme, toggleTheme, handleDrag }) {
  // const dragY = useMotionValue(0);

  return (
    <div className={`min-h-screen overflow-x-hidden relative ${isDarkTheme ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}>
      {/* FireParticles and initial content */}
      <div className="w-screen h-screen">
        <FireParticles theme={isDarkTheme ? "dark" : "light"} />
        <div 
          className="relative z-20 text-center h-screen flex flex-col items-center justify-center"
        >
          {/* <LampString /> */}
          <h3 className={`text-5xl sm:text-6xl md:text-7xl lg:text-9xl  ${isDarkTheme ? "text-white" : "text-black"}`} style={{ fontFamily: "Kolker Brush", fontStyle: "cursive" }}>
            リテシュ・マハレ
            {/* Ritesh Mahale */}
          </h3>
          <h3 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl ${isDarkTheme ? "text-white" : "text-gray-800"}`} style={{ fontFamily: "Kolker Brush", fontStyle: "cursive" }}>
            Student, Son, and Backend Developer
          </h3>
          <button
            onClick={toggleTheme}
            className={`mt-4 px-4 py-2 rounded ${isDarkTheme ? "bg-white text-gray-800" : "bg-gray-800 text-white"}`}
          >
            {isDarkTheme ? "Switch to Light Theme" : "Switch to Dark Theme"}
          </button>
        </div>
      </div>
      {/* About Me section */}
      <div className={`h-screen relative  items-center justify-center ${isDarkTheme ? "text-white bg-black" : "text-gray-800 bg-white"}`}>
        <AboutMe isDarkTheme={isDarkTheme}/>
      </div>
    </div>
  );
}
