import "./home.scss";
import MyParticles from "../../components/particles/MyParticles";
import cv from "../../assets/documents/CV.pdf";
import ghibli from "../../assets/my_pictures/new/ghibli.webp";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-root">
      <MyParticles />
      <div className="welcome-section">
        <div className="welcome-row">
          <img src={ghibli} alt="Krystian meditating" className="welcome-img" />
          <div className="welcome-text">
            <h1>Hi, I’m Krystian — software engineer.</h1>
            <p>
              Building everything from backend beasts to algorithm speedruns,
              interactive web, quirky games, and mind-bending AI.
            </p>
            <div className="home-buttons">
              <Link to="/tetris">
                <button className="tetris-button">
                  <span role="img" aria-label="game">
                    🎮
                  </span>{" "}
                  Play Tetris
                </button>
              </Link>
              <a href={cv} target="_blank" rel="noreferrer">
                <button className="cv-button">
                  <span className="download-icon">
                    <i className="fas fa-cloud-download-alt"></i>
                  </span>
                  Download my CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
