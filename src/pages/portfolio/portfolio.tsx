import "./portfolio.scss";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import projects from "../project/ProjectData";

const Portfolio = () => {
  return (
    <div className="portfolio-div">
      <h3 className="portfolio-title">My projects</h3>
      <hr />
      <div className="portfolio-projects">
        {projects.map((value, index) => {
          return <ProjectCard projectIndex={index} key={index}/>;
        })}
      </div>
    </div>
  );
};

export default Portfolio;
