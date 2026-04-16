import "./home.scss";
import PageMeta from "../../components/page-meta/PageMeta";
import MyParticles from "../../components/particles/MyParticles";
import cv from "../../assets/documents/CV.pdf";
import ghibli from "../../assets/my_pictures/new/ghibli.webp";
import { Link } from "react-router-dom";
import { FaCloudDownloadAlt } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home-root">
      <PageMeta title="Home" description="Krystian's portfolio — software engineer specializing in Java, Elasticsearch, React, and system design." />
      <MyParticles />
      <div className="welcome-section">
        <div className="welcome-row">
          <img src={ghibli} alt="Krystian meditating" className="welcome-img" />
          <div className="welcome-text">
            <h1>Hi, I'm Krystian — software engineer.</h1>
            <p>
              Building everything from backend beasts to algorithm speedruns,
              interactive web, quirky games, and mind-bending AI.
            </p>
            <div className="home-buttons">
              <Link to="/tetris" className="tetris-button">
                <span role="img" aria-label="game">
                  🎮
                </span>{" "}
                Play Tetris
              </Link>
              <a href={cv} target="_blank" rel="noreferrer" className="cv-button">
                <span className="download-icon">
                  <FaCloudDownloadAlt />
                </span>
                Download my CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
