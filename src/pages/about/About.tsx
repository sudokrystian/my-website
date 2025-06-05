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
        <p className="about-introduction">
          Hi, I’m Krystian—a backend-focused software engineer who loves making
          things fast, reliable, and easy to use. My core playgrounds are Java,
          Elasticsearch, Gradle, and React, but I’m always up for exploring new
          tech that helps get the job done right. 🚀
        </p>
        <p>
          I’ve worked everywhere from scrappy startups to some pretty unique
          places (like CERN! 🧑‍🔬), and these days I’m deep in the corporate
          world, focusing on master data management. My day-to-day usually
          revolves around search performance—figuring out the right data
          structures, squeezing out every bit of efficiency, and making sure
          we’re always winning the Big O Notation game. ⚡
        </p>
      </div>
      <Banner />

      <div id="introduction-div">
        <p>
          I enjoy mentoring junior devs, helping them tackle tricky problems,
          and sharing what I’ve learned. Thanks to my experience across the
          stack, I often end up being the go-between for backend, DevOps, and
          deployment teams—making sure everyone’s on the same page and things
          keep moving smoothly.
        </p>
        <p>
          I’m a big fan of Linux 🐧, but I’m platform-agnostic and always happy
          to pick up whatever tool works best. Outside of code, you’ll probably
          find me at a beer or whiskey tasting with colleagues 🍻🥃, geeking out
          about the latest in AI or quantum computing. 🤖⚛️
        </p>
        <p>
          If you want to talk performance, data, or just debate the merits of
          whiskey vs. beer, I’m always up for a good chat.😎
        </p>
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
        <br />
        <div className="experience-jobs">
          <div className="experience-job">
            <img src={stibo} alt="Stibo Systems" className="company-img" />
            <br />
            <h5>Stibo Systems 08/2022 - now</h5>
            <h6>Full Stack Software Engineer</h6>
            <ul>
              <li>
                Building and optimizing search systems with Java and
                Elasticsearch
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
            <img src={cern} alt="CERN" className="company-img" />
            <h5>CERN 08/2020 - 09/2021</h5>
            <h6>DevOps, System Design</h6>
            <ul>
              <li>
                Author of the new version of CBNG - custom Gradle based build
                tool
              </li>
              <li>
                One of the authors of Controls Artifact Service - Spring based
                REST service
              </li>
              <li>
                Support for existing applications build with Java, Groovy,
                Kotlin, Bash scripts
              </li>
            </ul>
          </div>
          <div className="experience-job">
            <img src={holme} alt="Holme Group" className="company-img" />
            <h5>Holme Gruppen ASP 04/2019 - 08/2020</h5>
            <h6>Full Stack web developer, System Design</h6>
            <ul>
              <li>
                Maintnance and further development of the old systems with PHP
                5.3 (f.e.
                <a
                  href="https://fashiongirl24.de/"
                  id="fashiongirl-link"
                  className="bold-600"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Fashion Girl,{" "}
                </a>
                <a
                  href="https://lookperfect.dk/"
                  id="lookperfect-link"
                  className="bold-600"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Look perfect
                </a>
                )
              </li>
              <li>
                Creating automated systems for providing loans and verifying
                status in RKI in cooperation with ExpressBank and Basisbank
                (f.e.
                <a
                  href="https://www.unolaan.dk"
                  id="unolaan-link"
                  className="bold-600"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Unolaan
                </a>
                ,
                <a
                  href="https://www.vialaan.dk"
                  id="vialaan-link"
                  className="bold-600"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Vialaan
                </a>
                )
              </li>
              <li>
                Writing custom plugins for WordPress and PrestaShop with PHP 7
              </li>
              <li>Designing and implementing websites</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="skills-div">
        <h3>Skills</h3>
        <hr />
        <br />
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
        <div className="education-containers">
          <div className="education-container">
            <img
              src={via}
              alt="VIA Univesity Collage"
              className="education-image"
            />
            <div className="education-header">
              <h6>2018 - 2022</h6>
              <p>ICT Software Engineering, VIA Horsens</p>
            </div>
            <ul>
              <li>System architecture</li>
              <li>Agile driven development</li>
              <li>Full-stack Software Engineering</li>
            </ul>
          </div>
          <div className="education-container">
            <img
              src={maskinmesterskole}
              alt="Maskinmesterskole"
              className="education-image"
            />
            <div className="education-header">
              <h6>2016-2018</h6>
              <p>Automotive Technology, Erhvervsakademi Aarhus</p>
            </div>
            <ul>
              <li>ECU programming</li>
              <li>Physics and Mathematics</li>
              <li>Engine design</li>
            </ul>
          </div>
          <div className="education-header"></div>
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
