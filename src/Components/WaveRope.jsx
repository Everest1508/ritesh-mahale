// import { motion } from 'framer-motion';

// const WaveyRope = () => {
//     return (
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10">
//         <motion.path
//           d="M 0 5 Q 25 0, 50 5 T 100 5"
//           stroke="black"
//           strokeWidth="1"
//           fill="transparent"
//           initial={{ pathLength: 0, pathOffset: 1 }}
//           animate={{ pathLength: 1, pathOffset: 0 }}
//           transition={{ duration: 2, ease: "easeInOut" }}
//         />
//       </svg>
//     );
//   }
  
//   export default WaveyRope;

// import React from "react";
// import { motion, useAnimation } from "framer-motion";
// import { useEffect } from "react";

// const WavyRope = () => {
//     const controls = useAnimation();

//     useEffect(() => {
//         const animate = async () => {
//             await controls.start({
//                 pathLength: [0, 1],
//                 transition: {
//                     duration: 2,
//                     repeat: Infinity,
//                     ease: "linear"
//                 }
//             });
//         };
//         animate();
//     }, [controls]);

//     const createPath = () => {
//         let path = "";
//         const amplitude = 20;
//         const frequency = 0.05;
//         const length = 500;

//         for (let x = 0; x <= length; x += 10) {
//             const y = amplitude * Math.sin(frequency * x);
//             path += `L ${x} ${y} `;
//         }
//         return `M 0 0 ${path}`;
//     };

//     return (
//         <svg width="600" height="100" viewBox="0 0 600 100">
//             <motion.path
//                 d={createPath()}
//                 stroke="blue"
//                 strokeWidth="2"
//                 fill="transparent"
//                 initial={{ pathLength: 0 }}
//                 animate={controls}
//             />
//         </svg>
//     );
// };

// export default WavyRope;

// import React, { useEffect } from "react";
// import { motion, useAnimation } from "framer-motion";

// const WavyRope = () => {
//     const controls = useAnimation();

//     useEffect(() => {
//         const animate = async () => {
//             await controls.start({
//                 pathOffset: [0, 1],
//                 transition: {
//                     duration: 5,
//                     repeat: Infinity,
//                     ease: "easeInOut"
//                 }
//             });
//         };
//         animate();
//     }, [controls]);

//     const createPath = () => {
//         let path = "";
//         const amplitude = 20;
//         const frequency = 0.05;
//         const length = 500;

//         for (let x = 0; x <= length; x += 10) {
//             const y = amplitude * Math.sin(frequency * x);
//             path += `L ${x} ${y} `;
//         }
//         return `M 0 0 ${path}`;
//     };

//     return (
//         <svg width="600" height="100" viewBox="0 0 600 100">
//             <motion.path
//                 d={createPath()}
//                 stroke="black"
//                 strokeWidth="2"
//                 fill="transparent"
//                 initial={{ pathOffset: 0 }}
//                 animate={controls}
//             />
//             <circle cx="500" cy="0" r="10" fill="yellow" />
//         </svg>
//     );
// };

// export default WavyRope;

import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

const PullSwitchRope = () => {
    const controls = useAnimation();
    const [isPulled, setIsPulled] = useState(false);

    const handlePull = async () => {
        setIsPulled(!isPulled);
        await controls.start({
            pathOffset: [0, 1],
            transition: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
            }
        });
    };

    const createPath = () => {
        let path = "";
        const amplitude = 20;
        const frequency = 0.05;
        const length = 500;

        for (let x = 0; x <= length; x += 10) {
            const y = amplitude * Math.sin(frequency * x);
            path += `L ${x} ${y} `;
        }
        return `M 0 0 ${path}`;
    };

    return (
        <div>
            <svg width="600" height="200" viewBox="0 0 600 200">
                <motion.path
                    d={createPath()}
                    stroke="black"
                    strokeWidth="2"
                    fill="transparent"
                    initial={{ pathOffset: 0 }}
                    animate={controls}
                />
                <circle cx="500" cy="0" r="10" fill="yellow" />
            </svg>
            <button onClick={handlePull} style={{ marginTop: 20 }}>
                {isPulled ? "Stop" : "Pull Switch"}
            </button>
        </div>
    );
};

export default PullSwitchRope;