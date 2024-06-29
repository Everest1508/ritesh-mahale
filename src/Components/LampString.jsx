import React from "react";
import { motion } from "framer-motion";

const LampString = () => {
    return (
        <motion.div
            className="lamp-string"
            style={{
                position: "fixed",
                top: "0px", // Adjust top position as needed
                right: "20px", // Adjust right position as needed
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                transformOrigin: "top center", // Set transform origin to top center
            }}
            animate={{
                rotate: [-5, 5, -5], // Rotation keyframes for swinging
                transition: {
                    duration: 3, // Duration of each swing
                    ease: "easeInOut", // Easing function
                    repeat: Infinity, // Repeat the animation infinitely
                    repeatType: "reverse", // Reverse direction after each swing
                },
            }}
        >
            {/* Lamp string elements */}
            <div className="lamp"></div>
            <div className="lamp"></div>
            <div className="lamp"></div>
            <div className="lamp"></div>
            <div className="lamp"></div>
            <div className="lamp"></div>
            <div className="lamp"></div>
            <div className="lamp"></div>
            <div className="lamp"></div>
            {/* Add more lamps as needed */}
        </motion.div>
    );
};

export default LampString;
