import AboutMeBox from "../../components/about-me-boxes/AboutMeBox";
import Banner from "../../components/banner/Banner";
import SkillBox from "../../components/skill-box/SkillBox";
import "./about.scss";
import HobbiesSection from "../../components/hobbies-section/HobbiesSection";
import { techIcons } from "../../constants/techIcons";
import {
  experienceSummaries,
  educationData,
} from "../../constants/experienceData";

const About = () => {
  const experienceSectionId = "experience-div";
  const skillsSectionId = "skills-div";
  const educationSectionId = "education-div";
  const hobbiesSectionId = "hobbies-div";

  return (
    <div className="about-div">
      <div id="introduction-div">
        <h3 className="about-title">About me</h3>
        <hr />
        <div className="about-me-block">
          <h4>Who I am</h4>
          <p>
            Hi, I'm <span className="about-highlight">Krystian</span> — a
            backend-focused software engineer who loves making things{" "}
            <b>fast</b>, <b>reliable</b>, and <b>easy to use</b>. My core
            playgrounds are <span className="about-highlight">Java</span>,{" "}
            <span className="about-highlight">Elasticsearch</span>,{" "}
            <span className="about-highlight">Gradle</span>, and{" "}
            <span className="about-highlight">React</span>, but I'm always up
            for exploring new tech that gets the job done right.
          </p>
        </div>

        <div className="about-me-block">
          <h4>What I Do</h4>
          <ul className="about-list">
            <li>
              <span className="about-highlight">Search performance</span>{" "}
              specialist — data structures,{" "}
              <span className="about-highlight">Big O Notation</span>, and
              squeezing out every bit of efficiency
            </li>
            <li>
              <span className="about-highlight">Mentor</span> — love helping
              junior devs and sharing what I've learned
            </li>
            <li>
              <span className="about-highlight">
                Bridge between backend, DevOps, and deployment teams
              </span>{" "}
              — keeping everyone on the same page, smoothing out the process
            </li>
            <li>
              Hands-on with <span className="about-highlight">Linux</span> 🐧,
              but platform-agnostic and tool-agnostic
            </li>
          </ul>
        </div>
      </div>
      <Banner />
      <div id="introduction-div" className="about-section-gap">
        <div className="about-me-block">
          <h4>What Makes Me Different</h4>
          <ul className="about-list">
            <li>
              Worked at <span className="about-highlight">CERN</span> 🧑‍🔬 on
              custom Gradle tooling and Spring REST services
            </li>
            <li>
              Experience in both scrappy startups and large-scale corporate MDM
              (Master Data Management)
            </li>
            <li>
              Enjoy optimizing not just code, but also teams and workflows
            </li>
          </ul>
        </div>

        <div className="about-me-block">
          <h4>Beyond Code</h4>
          <ul className="about-list">
            <li>Beer and whiskey tasting with colleagues 🍻🥃</li>
            <li>Geeking out about AI, quantum computing, and new tech 🤖⚛️</li>
            <li>
              Always up for a debate on performance, data, or whiskey vs. beer!
              😎
            </li>
          </ul>
        </div>
      </div>

      <AboutMeBox
        experienceSectionId={experienceSectionId}
        skillsSectionId={skillsSectionId}
        educationSectionId={educationSectionId}
        hobbiesSectionId={hobbiesSectionId}
      />

      <div id="experience-div" className="about-section-gap">
        <h3>Experience</h3>
        <hr />
        <div className="experience-block">
          {experienceSummaries.map((job) => (
            <div className="experience-job" key={job.company}>
              <div className="experience-card-header">
                <img
                  src={job.logo}
                  alt={job.company}
                  className="company-img"
                />
                <div>
                  <h5>{job.company}</h5>
                  <span className="job-date">{job.date}</span>
                  <div className="job-role">{job.role}</div>
                </div>
              </div>
              <ul className="job-desc-list">
                {job.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div id="skills-div" className="about-section-gap">
        <h3>Skills</h3>
        <hr />
        <div className="skillboxes-div">
          <div className="skills-grid">
            {Object.entries(techIcons).map(([key, { icon, text, color }]) => (
              <SkillBox key={key} icon={icon} text={text} color={color} />
            ))}
          </div>
        </div>
      </div>

      <div id="education-div" className="about-section-gap">
        <h3>Education</h3>
        <hr />
        <div className="education-block">
          {educationData.map((edu) => (
            <div className="education-card" key={edu.school}>
              <div className="education-card-header">
                <img
                  src={edu.logo}
                  alt={edu.school}
                  className="education-image"
                />
                <div>
                  <div className="edu-date">{edu.date}</div>
                  <div className="edu-title">{edu.title}</div>
                  <div className="edu-school">{edu.school}</div>
                </div>
              </div>
              <ul className="edu-desc-list">
                {edu.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div id="hobbies-div">
        <h3>Hobbies</h3>
        <hr />
        <HobbiesSection />
      </div>
    </div>
  );
};

export default About;
