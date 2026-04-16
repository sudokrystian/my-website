import "./portfolio.scss";
import PageMeta from "../../components/page-meta/PageMeta";
import ProjectCard from "../../components/project-card/ProjectCard";
import projects from "../../constants/projectData";
import MyParticles from "../../components/particles/MyParticles";

const Portfolio = () => {
  return (
    <div className="portfolio-div">
      <PageMeta title="Portfolio" description="Software projects — games, web apps, REST APIs, and embedded systems built with Java, React, Angular, Unity, and more." />
      <div className="portfolio-header">
        <h3 className="portfolio-title">My projects</h3>
        <hr />
      </div>

      <div className="portfolio-projects">
        <MyParticles />

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
