import "./home.scss";
import { NavLink } from "react-router-dom";
import cv from "../../assets/documents/CV.pdf";
import MyParticles from "../../components/particles/MyParticles";

const Home = () => {
  return (
    <div className="home-div">
      <MyParticles />
      <div className="welcome-div">
        <h4>
          Hi, I’m Krystian —  software engineer.
          <br />
          Building everything from backend beasts to algorithm speedruns,
          interactive web, quirky games, and mind-bending AI.
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
