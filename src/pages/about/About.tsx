import {
  FaJava,
  FaReact,
  FaPhp,
  FaPython,
  FaJenkins,
  FaAndroid,
  FaGitAlt,
  FaHtml5,
  FaUnity,
  FaSoap,
} from "react-icons/fa";
import {
  SiDotnet,
  SiGradle,
  SiJavascript,
  SiJquery,
  SiAngular,
  SiMysql,
  SiPostgresql,
  SiTypescript,
  SiSpring,
  SiApachegroovy,
  SiKotlin,
  SiSass,
  SiGnubash,
  SiElasticsearch,
  SiTensorflow,
} from "react-icons/si";

import { GiArtificialIntelligence } from "react-icons/gi";

import AboutMeBox from "../../components/about-me-boxes/AboutMeBox";
import Banner from "../../components/banner/Banner";
import SkillBox from "../../components/skill-box/SkillBox";
import "./about.scss";
// Pictures
import via from "../../assets/experience/via.png";
import stibo from "../../assets/about/stibo.png";
import cern from "../../assets/experience/cern.png";
import holme from "../../assets/experience/holmegroup.png";
import maskinmesterskole from "../../assets/about/maskinmesterskole.png";
import HobbiesSection from "../../components/hobbies-section/HobbiesSection";
import { techIcons } from "../../constants/techIcons";

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
            Hi, I’m <span className="about-highlight">Krystian</span> — a
            backend-focused software engineer who loves making things{" "}
            <b>fast</b>, <b>reliable</b>, and <b>easy to use</b>. My core
            playgrounds are <span className="about-highlight">Java</span>,{" "}
            <span className="about-highlight">Elasticsearch</span>,{" "}
            <span className="about-highlight">Gradle</span>, and{" "}
            <span className="about-highlight">React</span>, but I’m always up
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
              junior devs and sharing what I’ve learned
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
      <br />
      <div id="introduction-div">
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
      <br />
      <div id="experience-div">
        <h3>Experience</h3>
        <hr />
        <div className="experience-block">
          <div className="experience-job">
            <div className="experience-card-header">
              <img src={stibo} alt="Stibo Systems" className="company-img" />
              <div>
                <h5>Stibo Systems</h5>
                <span className="job-date">08/2022 – now</span>
                <div className="job-role">
                  Full Stack Software Engineer, System design
                </div>
              </div>
            </div>
            <ul className="job-desc-list">
              <li>
                Building and optimizing{" "}
                <span className="about-highlight">search systems</span> with{" "}
                <span className="about-highlight">Java</span>,{" "}
                <span className="about-highlight">Elasticsearch</span>and{" "}
                <span className="about-highlight">React</span>
              </li>
              <li>
                Mentoring junior developers and designing solution architecture
              </li>
              <li>
                Bridging backend, DevOps, and deployment teams across projects
              </li>
            </ul>
          </div>

          <div className="experience-job">
            <div className="experience-card-header">
              <img src={cern} alt="CERN" className="company-img" />
              <div>
                <h5>CERN</h5>
                <span className="job-date">08/2020 – 09/2021</span>
                <div className="job-role">DevOps, System Design</div>
              </div>
            </div>
            <ul className="job-desc-list">
              <li>
                Author of a new version of{" "}
                <span className="about-highlight">CBNG</span> — custom Gradle
                build tool
              </li>
              <li>
                Co-author of{" "}
                <span className="about-highlight">
                  Controls Artifact Service
                </span>{" "}
                — Spring REST service
              </li>
              <li>
                Support for Java, Groovy, Kotlin, Bash scripts in legacy
                applications
              </li>
            </ul>
          </div>

          <div className="experience-job">
            <div className="experience-card-header">
              <img src={holme} alt="Holme Group" className="company-img" />
              <div>
                <h5>Holme Gruppen ASP</h5>
                <span className="job-date">04/2019 – 08/2020</span>
                <div className="job-role">
                  Full Stack Web Developer, System Design
                </div>
              </div>
            </div>
            <ul className="job-desc-list">
              <li>
                Maintenance and further development of old systems (PHP 5.3):
                <a
                  href="https://fashiongirl24.de/"
                  className="exp-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fashion Girl
                </a>
                ,
                <a
                  href="https://lookperfect.dk/"
                  className="exp-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Look Perfect
                </a>
              </li>
              <li>Creating automated systems for loans and RKI verification</li>
              <li>
                Writing custom plugins for WordPress and PrestaShop with PHP 7
              </li>
              <li>Designing and implementing new websites</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="skills-div">
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
      <br />
      <div id="education-div">
        <h3>Education</h3>
        <hr />
        <div className="education-block">
          <div className="education-card">
            <div className="education-card-header">
              <img
                src={via}
                alt="VIA University College"
                className="education-image"
              />
              <div>
                <div className="edu-date">2018 – 2022</div>
                <div className="edu-title">ICT Software Engineering</div>
                <div className="edu-school">VIA Horsens</div>
              </div>
            </div>
            <ul className="edu-desc-list">
              <li>System architecture</li>
              <li>Agile driven development</li>
              <li>Full-stack Software Engineering</li>
            </ul>
          </div>

          <div className="education-card">
            <div className="education-card-header">
              <img
                src={maskinmesterskole}
                alt="Maskinmesterskole"
                className="education-image"
              />
              <div>
                <div className="edu-date">2016 – 2018</div>
                <div className="edu-title">Automotive Technology</div>
                <div className="edu-school">Erhvervsakademi Aarhus</div>
              </div>
            </div>
            <ul className="edu-desc-list">
              <li>ECU programming</li>
              <li>Physics and Mathematics</li>
              <li>Engine design</li>
            </ul>
          </div>
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
