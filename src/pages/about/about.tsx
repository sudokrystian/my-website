import AboutMeBox from "../../components/AboutMeBoxes/AboutMeBox";
import Banner from "../../components/Banner/Banner";
import SkillBox from "../../components/SkillBox/SkillBox";
import "./about.scss";
// Pictures
import via from "../../assets/experience/via.png";
import cern from "../../assets/experience/cern.png";
import holme from "../../assets/experience/holmegroup.png";
import maskinmesterskole from "../../assets/about/maskinmesterskole.png";

const About = () => {
  const experienceSectionId = "experience-div";
  const skillsSectionId = "skills-div";
  const educationSectionId = "education-div";
  const hobbiesSectionId = "hobbies-div";

  const skills: string[] = [
    "Java",
    "ReactJS",
    "PHP",
    ".NET",
    "Python",
    "Gradle plugins",
    "JavaScript",
    "JQuery",
    "AngularJS",
    "MySQL",
    "PostgreSQL",
    "Typescript",
    "Jenkins",
    "Android",
    "Spring",
    "Groovy",
    "Kotlin",
    "SCSS",
    "Shell scripts",
    "GIT",
    "HTML",
    "SOAP",
    "Unity",
  ];

  return (
    <div className="about-div">
      <div id="introduction-div">
        <h3 className="about-title">About me</h3>
        <hr />
        <p className="about-introduction">
        Hi there! My name is Krystian and I am a software engineer with a passion for creating efficient and innovative solutions. 
        I am 25 years old and have had the opportunity to work as a full stack developer in a variety of settings. This experience 
        has allowed me to become comfortable with acquiring new skills and technologies in a short amount of time. One of the things 
        I enjoy most about being a software engineer is the opportunity to work with a team to solve problems and improve processes. 
        I believe that collaboration is key to success, and I always try to take the time to discuss different approaches and solutions 
        with my teammates. Linux is my favorite operating system, but I also don't mind using Windows or MacOS. I believe there are no 
        unsolvable problems, only short deadlines. I am always up for a challenge and strive to meet the expectations with the highest 
        level of quality in my work.
        </p>
      </div>
      <Banner />
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
            <img
              src={via}
              alt="Via Univeristy Collage"
              className="company-img"
            />
            <br />
            <h5>VIA University College 09/2021 - now</h5>
            <h6>Java student instructor and student guard</h6>
            <ul>
              <li>
                Teaching students the core concepts and design patterns in Java
              </li>
              <li>
                Sharing knowledge about reading UML diagrams and interpreting
                domain models
              </li>
              <li>Introducing alghoritms efficiency (Big O notation)</li>
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
            <h6>Full stack web developer, System Design</h6>
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
          {skills.map((skill) => (
            <SkillBox boxText={skill} key={skill} />
          ))}
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
        <p>
          I am the kind of person who can't really sit still for a long time,
          therefore I have many hobbies that keep me going. Here is a list of
          some of my favorite ones.
        </p>
        <ul>
          <li>Playing ukulele</li>
          <li>Fixing and riding my motorcycle</li>
          <li>Philosophy (I used to be the head of philosophy panel in VIA Horsens)</li>
          <li>
            Guidance of young, passionate minds (I am a mentor for first
            semester students)
          </li>
          <li>
            Travelling (the main aim for my travels are beautiful hikes in
            nature and good food)
          </li>
          <li>Board games</li>
          <li>
            Computer games (strategy and RPG are the best way to run away from
            brutal reality from time to time)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
