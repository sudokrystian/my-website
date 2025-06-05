import { FaUserTie, FaTools, FaGraduationCap, FaGamepad } from "react-icons/fa";
import "./about-me-box.scss";

const AboutMeBox = (props: {
  experienceSectionId: string | URL | undefined;
  skillsSectionId: string | URL | undefined;
  educationSectionId: string | URL | undefined;
  hobbiesSectionId: string | URL | undefined;
}) => {
  const boxes = [
    {
      id: "experience-box",
      label: "Experience",
      icon: <FaUserTie />,
      section: props.experienceSectionId,
    },
    {
      id: "skills-box",
      label: "Skills",
      icon: <FaTools />,
      section: props.skillsSectionId,
    },
    {
      id: "education-box",
      label: "Education",
      icon: <FaGraduationCap />,
      section: props.educationSectionId,
    },
    {
      id: "hobbies-box",
      label: "Hobbies",
      icon: <FaGamepad />,
      section: props.hobbiesSectionId,
    },
  ];

  return (
    <div className="about-me-boxes">
      {boxes.map(({ id, label, icon, section }) => (
        <div
          className="about-me-card"
          id={id}
          key={id}
          onClick={() => window.open("#" + section, "_self")}
        >
          <div className="about-me-card-icon">{icon}</div>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
};

export default AboutMeBox;
