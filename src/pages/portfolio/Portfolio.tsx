import "./portfolio.scss";
import ProjectCard from "../../components/project-card/ProjectCard";
import projects from "../project/ProjectData";

const Portfolio = () => {
  return (
    <div className="portfolio-div">
      <h3 className="portfolio-title">My projects</h3>
      <hr />
      <div className="portfolio-projects">
        {projects.map((value, index) => {
          console.log("Project index:", index);
          console.log("Project title:", value.projectTitle);
          console.log("Project:", value);
          if (index != null && index !== undefined) {
            console.log("Rendering project card for index:", index);

            return <ProjectCard projectIndex={index} key={index} />;
          }
        })}
      </div>
    </div>
  );
};

export default Portfolio;
