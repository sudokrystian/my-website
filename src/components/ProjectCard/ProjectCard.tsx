import { BrowserRouter as Route, NavLink } from "react-router-dom";
import projects from "../../pages/project/ProjectData";
import SkillBox from "../SkillBox/SkillBox";
import "./ProjectCard.scss";

const ProjectCard = (props: {
  projectIndex: number
}) => {
  return (
    <div className="project">
      <NavLink
        to={{
          pathname: "/project",
          state: props.projectIndex,
        }}
      >
        <div className="project-image-container">
          <img src={projects[props.projectIndex].projectImage} alt="Project" className="project-card-image"/>
          <div className="project-card-overlay">
            <p className="project-card-text">{projects[props.projectIndex].projectTitle}</p>
            <div className="project-card-technologies">
            {projects[props.projectIndex].projectTechnologies.map((technology) => (
              <SkillBox boxText={technology} key={technology} />
            ))}
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default ProjectCard;
