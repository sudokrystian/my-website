import { useNavigate, useParams } from "react-router-dom";
import projects from "../../constants/projectData";
import SkillBox from "../../components/skill-box/SkillBox";
import git from "../../assets/my_projects/git.png";
import { techIcons } from "../../constants/techIcons";
import { FaQuestion } from "react-icons/fa";
import "./project.scss";

const Project = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const index = Number(id);

  if (isNaN(index) || index < 0 || index >= projects.length) {
    return <div>Project not found.</div>;
  }

  function getNextProject() {
    const next = index !== projects.length - 1 ? index + 1 : 0;
    navigate(`/project/${next}`);
  }

  function getPreviousProject() {
    const prev = index !== 0 ? index - 1 : projects.length - 1;
    navigate(`/project/${prev}`);
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
            alt={projects[index].projectTitle}
            onMouseOver={(e) => (e.currentTarget.src = git)}
            onMouseLeave={(e) =>
              (e.currentTarget.src = projects[index].projectImage)
            }
          />
        </a>

        <div className="project-content-text">
          <div className="project-technologies skills-grid">
            {projects[index].projectTechnologies.map((tech, idx) => {
              const techData = techIcons[tech];
              const icon =
                techData && techData.icon ? techData.icon : FaQuestion;
              const text = techData ? techData.text : tech;
              const color = techData ? techData.color : undefined;
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
          <p className="project-description">
            {projects[index].projectDescription}
          </p>
          <a
            href={projects[index].projectUrl}
            target="_blank"
            rel="noreferrer"
            className="project-repository-button"
          >
            Source code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
