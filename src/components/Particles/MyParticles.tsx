import { useCallback } from "react";
import Particles from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";

const MyParticles = () => {

  return (
    <div className="canvas-absolute">
      <Particles
        id="tsparticles"
        options={{
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                // area: 1803, // <--- CHANGED: was value_area
                height: 1000,
                width: 1000,
              },
            },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            stroke: { width: 10, color: "#36618d" },
            opacity: {
              value: 0.5,
              // random: { enable: true }, // <--- CHANGED: was true
              animation: {
                enable: false,
                speed: 0.8,
                count: {
                  min: 0.1,
                  max: 20, // <--- CHANGED: was max
                },
                // minimumValue: 0.1, // <--- CHANGED: was min
                sync: false,
              },
            },
            size: {
              value: 1.5,
              // random: { enable: true }, // <--- CHANGED: was true
              animation: {
                enable: false,
                speed: 40,
                // minimumValue: 0.1, // <--- CHANGED: was minimumValue
                sync: false,
              },
            },
            links: {
              enable: true,
              distance: 200,
              color: "#000000",
              opacity: 0.5,
              width: 1,
            },
            move: {
              enable: true,
              speed: 6,
              direction: "none",
              random: false,
              straight: false,
              outModes: {
                default: "bounce",
              },
              // bounce: true,
              attract: {
                enable: false,
                // rotate: 600, // <--- CHANGED: was rotateX/rotateY
              },
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              onClick: {
                enable: false,
                mode: "bubble",
              },
              resize: { enable: true }, // <--- CHANGED: was true
            },
            modes: {
              grab: {
                distance: 400,
                links: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
              push: {
                quantity: 4,
              },
              remove: {
                quantity: 2,
              },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default MyParticles;
