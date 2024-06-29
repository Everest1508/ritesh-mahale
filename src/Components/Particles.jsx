// src/FireParticles.js
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim"; 


export default function FireParticles({ theme }){
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: theme === "dark" ? "#000000" : "#ffffff",
                    },
                },
                fpsLimit: 120,
                particles: {
                    color: {
                        value: ["#ff4500", "#ff8c00", "#ffa500"], 
                    },
                    links: {
                        enable: false, // no links for fire effect
                    },
                    move: {
                        direction: "top", // particles move upwards
                        enable: true,
                        outModes: {
                            default: "out",
                            bottom: "out",
                        },
                        random: true,
                        speed: 3,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 30,
                    },
                    opacity: {
                        value: { min: 0, max: 0.5 },
                        animation: {
                            enable: true,
                            speed: 1,
                            minimumValue: 0,
                        },
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 2, max: 8 }, 
                    },
                },
                detectRetina: true,
            }}
            
        />
    );
}
