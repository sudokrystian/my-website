import "./home.scss";
import { BrowserRouter as Route, NavLink } from "react-router-dom";
import Particles from "../../components/Particles/Particles";
import cv from "../../assets/documents/CV.pdf";

const Home = () => {

  return (
    <div className="home-div">
      <div className="canvas-absolute">
        <Particles
          height="100vh"
          params={{
            particles: {
              number: {
                value: 80,
                density: {
                  enable: true,
                  value_area: 1803.4120608655228,
                },
              },
              color: {
                value: "#ffffff",
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 10,
                  color: "#36618d",
                },
              },
              opacity: {
                value: 0.5,
                random: true,
                anim: {
                  enable: false,
                  speed: 0.8,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 1.5,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
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
                out_mode: "bounce",
                bounce: true,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: "window",
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
                onclick: {
                  enable: false,
                  mode: "bubble",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
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
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }}
        />
      </div>
      <div className="welcome-div">
        <h4>
          Hi! <br />
          If you wish to learn more about me click 
          <b>
            <NavLink to="/about">
                  {" "}here
            </NavLink>
          </b>
        </h4>
        <a href={cv} target="_blank" rel="noreferrer">
          <button className="cv-button">
            Download my CV 
            <div className="download-icon"><i className="fas fa-cloud-download-alt"></i></div>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;
