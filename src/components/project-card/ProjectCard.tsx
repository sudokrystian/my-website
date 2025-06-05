import { BrowserRouter as Route, Link } from "react-router-dom";
import projects from "../../constants/projectData";
import { techIcons } from "../../constants/techIcons";
import { FaQuestion } from "react-icons/fa";
import SkillBox from "../skill-box/SkillBox";
import "./project-card.scss";

const ProjectCard = (props: { projectIndex: number }) => {
  const project = projects[props.projectIndex];

  return (
    <div className="project">
      <Link to="/project" className="project-link" state={props.projectIndex}>
        <div className="project-image-container">
          <img
            src={projects[props.projectIndex].projectImage}
            alt="Project"
            className="project-card-image"
          />
          <div className="project-card-overlay">
            <p className="project-card-text">
              {projects[props.projectIndex].projectTitle}
            </p>
            <div className="project-card-technologies skills-grid">
              {project.projectTechnologies.map((tech, idx) => {
                const techData = techIcons[tech];
                const icon = techData && techData.icon ? techData.icon : FaQuestion;
                const text = techData ? techData.text : tech;
                const color = techData ? techData.color : undefined;
                if (!techData) {
                  console.warn(`Missing icon for tech: ${tech}`);
                }
                return (
                  <SkillBox
                    key={tech + "-" + idx}
                    icon={icon}
                    text={text}
                    color={color}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
