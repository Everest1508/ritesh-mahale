// Components/Leaf.js
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useViewportScroll } from "framer-motion";
import LeafImg from "../static/img/leaf.png";

const random = (min, max) => Math.random() * (max - min) + min;

export default function Leaf() {
  const { scrollY } = useViewportScroll();
  const controls = useAnimation();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      controls.start({
        x: random(-50, 50), // Random horizontal movement
        y: latest, // Vertical movement based on scroll
        rotate: random(-45, 45), // Random rotation
        transition: {
          type: "spring",
          stiffness: random(50, 150), // Random stiffness for more natural movement
          damping: random(10, 25), // Random damping for more natural movement
        }
      });
    });
  }, [scrollY, controls]);

  return (
    <motion.div
      animate={controls}
      className="fixed top-0 left-0 w-16 h-16 z-50"
    >
      <img
        src={LeafImg} // Replace with your leaf image path
        alt="Leaf"
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
}
