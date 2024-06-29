import React, { useState } from "react";
import FireParticles from "./Components/Particles";
import LampString from "./Components/LampString";

export default function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    return (
        <div className={`min-h-screen flex items-center justify-center ${isDarkTheme ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}>
            <div className="absolute z-10">
                <FireParticles theme={isDarkTheme ? "dark" : "light"} />
            </div>
            <div className="relative z-20 text-center">
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
            </div>
        </div>
    );
}
