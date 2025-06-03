import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import projects from "./ProjectData";
import SkillBox from "../../components/skill-box/SkillBox";
import git from "../../assets/my_projects/git.png";
import "./project.scss";

const Project = () => {
  const location = useLocation();
  const indexParam = typeof location.state === "number" ? location.state : 0;
  const [index, setIndex] = useState<number>(indexParam);

  function getNextProject() {
    setIndex((prev) => (prev !== projects.length - 1 ? prev + 1 : 0));
  }

  function getPreviousProject() {
    setIndex((prev) => (prev !== 0 ? prev - 1 : projects.length - 1));
  }

  if (index < 0 || index >= projects.length) {
    return <div>Project not found.</div>;
  }

  return (
    <div className="project-div">
      <h3 className="project-title">{projects[index].projectTitle}</h3>
      <hr />
      <div className="project-description-buttons">
        <button onClick={getPreviousProject}>Previous</button>
        <button onClick={getNextProject}>Next</button>
      </div>
      <div className="project-content-container">
        <a href={projects[index].projectUrl} target="_blank" rel="noreferrer">
          <img
            src={projects[index].projectImage}
            alt="project"
            onMouseOver={(e) => (e.currentTarget.src = git)}
            onMouseLeave={(e) =>
              (e.currentTarget.src = projects[index].projectImage)
            }
          />
        </a>

        <div className="project-content-text">
          <div className="project-technologies">
            {projects[index].projectTechnologies.map((technology) => (
              <SkillBox boxText={technology} key={technology} />
            ))}
          </div>
          <p className="project-description">
            {projects[index].projectDescription}
          </p>
          <a
            href={projects[index].projectUrl}
            target="_blank"
            rel="noreferrer"
            className="project-repository-button"
          >
            <button>Source code</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;