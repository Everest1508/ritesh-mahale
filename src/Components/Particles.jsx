import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

export default function Prticles() {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#ffffff", // dark background to highlight fire effect
                    },
                },
                fpsLimit: 60, // Adjust fpsLimit as needed for smoother animation
                emitters: {
                    direction: "top",
                    life: {
                        duration: 0.1,
                        count: 10,
                    },
                    rate: {
                        quantity: 5, // Adjust the quantity of new particles per second
                        delay: 0.1, // Delay between each emission
                    },
                },
                pauseOnBlur: true,
                particles: {
                    color: {
                        value: ["#ff4500", "#ff8c00", "#ffa500"], // gradient of fire colors
                    },
                    links: {
                        enable: false, // no links for fire effect
                    },
                    move: {
                        direction: "top", // particles move upwards
                        enable: true,
                        outModes: {
                            default: "out",
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
                        value: 50,
                    },
                    opacity: {
                        value: { min: 0.3, max: 0.8 }, // varied opacity
                        animation: {
                            enable: true,
                            speed: 0.5,
                            minimumValue: 0,
                            startValue: "max",
                            destroy: "min",
                        },
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 2, max: 8 }, // varied size
                        animation: {
                            enable: true,
                            speed: 5,
                            minimumValue: 0,
                            startValue: "max",
                            destroy: "min",
                        },
                    },
                    life: {
                        duration: {
                            sync: false,
                            value: 5,
                            loop: true, // Ensure particles continue to loop
                        },
                        count: 0,
                        delay: {
                            value: 0,
                            random: {
                                enable: false,
                                minimumValue: 0,
                            },
                        },
                    },
                    position: {
                        y: { min: 100, max: 200 },
                    },
                    zIndex: {
                        value: {
                            min: -1,
                            max: 1,
                        },
                        opacityRate: 0.5,
                        sizeRate: 1,
                        velocityRate: 1,
                    },
                },
                detectRetina: true,
            }}
        />
    );
}
