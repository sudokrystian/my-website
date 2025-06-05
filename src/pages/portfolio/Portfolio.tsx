import "./portfolio.scss";
import ProjectCard from "../../components/project-card/ProjectCard";
import projects from "../../constants/projectData";

const Portfolio = () => {
  return (
    <div className="portfolio-div">
      <h3 className="portfolio-title">My projects</h3>
      <hr />
      <div className="portfolio-projects">
        {projects.map((value, index) => {
          if (index != null && index !== undefined) {
            return <ProjectCard projectIndex={index} key={index} />;
          }
        })}
      </div>
    </div>
  );
};

export default Portfolio;
