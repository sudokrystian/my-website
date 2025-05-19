import "./home.scss";
import { NavLink } from "react-router-dom";
import cv from "../../assets/documents/CV.pdf";
import MyParticles from "../../components/Particles/MyParticles";

const Home = () => {
  return (
    <div className="home-div">
      <MyParticles />
      <div className="welcome-div">
        <h4>
          Hi! <br />
          If you wish to learn more about me click
          <b>
            <NavLink to="/about"> here</NavLink>
          </b>
        </h4>
        <a href={cv} target="_blank" rel="noreferrer">
          <button className="cv-button">
            Download my CV
            <div className="download-icon">
              <i className="fas fa-cloud-download-alt"></i>
            </div>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;
