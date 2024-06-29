import React from "react";
import { motion } from "framer-motion";

const LampString = () => {
    return (
        <motion.div
            className="lamp-string"
            style={{
                position: "fixed",
                top: "20px", // Adjust top position as needed
                right: "20px", // Adjust right position as needed
            }}
            animate={{
                rotate: [0, -5, 5, -5, 0], // Swing animation keyframes
            }}
            transition={{
                duration: 2, // Duration of the animation
                ease: "easeInOut", // Easing function
                loop: Infinity, // Loop the animation infinitely
            }}
        >
            {/* Lamp string element */}
            <div className="lamp"></div>
            <div className="lamp"></div>
            <div className="lamp"></div>
            {/* Add more lamps as needed */}
        </motion.div>
    );
};

export default LampString;
