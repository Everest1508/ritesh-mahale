import React, { useState } from "react";
import FireParticles from "./Components/Particles";
import LampString from "./Components/LampString";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const dragY = useMotionValue(0);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    const handleDrag = (event, info) => {
        const dragDistance = info.offset.y;
        const sensitivity = 50; // Adjust sensitivity as needed

        if (dragDistance > sensitivity) {
            setIsDarkTheme(true); // Dragged down, switch to dark theme
        } else if (dragDistance < -sensitivity) {
            setIsDarkTheme(false); // Dragged up, switch to light theme
        }
    };

    return (
        <div className={`min-h-screen flex items-center justify-center ${isDarkTheme ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}>
            <div className="absolute z-10">
                <FireParticles theme={isDarkTheme ? "dark" : "light"} />
            </div>
            <motion.div
                className="relative z-20 text-center"
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
        </div>
    );
}
