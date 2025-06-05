import "./experience.scss";
// Workplace logos
import stibo from "../../assets/experience/stibo.png";
import via from "../../assets/experience/via.png";
import cern from "../../assets/experience/cern.png";
import holme from "../../assets/experience/holmegroup.png";
// Technologies images
import java from "../../assets/experience/technologies/java.png";
import swing from "../../assets/experience/technologies/swing.png";
import kotlin from "../../assets/experience/technologies/kotlin.png";
import groovy from "../../assets/experience/technologies/groovy.png";
import gradle from "../../assets/experience/technologies/gradle.png";
import jenkins from "../../assets/experience/technologies/jenkins.png";
import maven from "../../assets/experience/technologies/maven.png";
import spring from "../../assets/experience/technologies/spring.png";
import jpa from "../../assets/experience/technologies/jpa.png";
import jwt from "../../assets/experience/technologies/jwt.png";
import net from "../../assets/experience/technologies/.NET.png";
import python from "../../assets/experience/technologies/python.png";
import react from "../../assets/experience/technologies/react.png";
import angular from "../../assets/experience/technologies/angular.png";
import scss from "../../assets/experience/technologies/scss.png";
import html from "../../assets/experience/technologies/html.png";
import jquery from "../../assets/experience/technologies/jquery.png";
import typescript from "../../assets/experience/technologies/typescript.png";
import js from "../../assets/experience/technologies/js.png";
import php from "../../assets/experience/technologies/php.png";
import gwt from "../../assets/experience/technologies/gwt.png";
import osgi from "../../assets/experience/technologies/osgi.png";
import svn from "../../assets/experience/technologies/svn.png";
import elasticsearch from "../../assets/experience/technologies/elasticsearch.png";
import git from "../../assets/experience/technologies/git.png";

const Experience = () => {
  return (
    <div className="experience-div">
      <h3 className="experience-title">My experience</h3>
      <hr />

      <div className="workexp-job-card">
        <div className="workexp-card-header">
          <img src={stibo} alt="Stibo Systems" className="company-img" />
          <div>
            <h5>Stibo Systems</h5>
            <span className="job-date">08/2022 – now</span>
            <div className="job-role">Full Stack Software Engineer</div>
          </div>
        </div>

        <div className="workexp-section">
          <h6>Role & Impact</h6>
          <p>
            I design and build new features for our industry-leading Master Data
            Management platform, while also diving into legacy code to keep
            critical systems running smoothly.
            <span className="about-highlight">Java</span>,
            <span className="about-highlight">React</span>,
            <span className="about-highlight">Elasticsearch</span>,
            <span className="about-highlight">Gradle</span>, and more are my
            daily toolkit, allowing me to work across both modern and classic
            technologies.
          </p>
        </div>

        <div className="workexp-section">
          <h6>My Work at Stibo</h6>
          <p>
            I mentor junior developers, shape solution architectures, and bridge
            communication between backend, DevOps, and deployment teams. The
            work is complex and rewarding—we handle massive datasets and push
            performance to the limit, ensuring our data solutions deliver speed
            and reliability at scale.
            <br />
            With deep dives into JVM internals, memory optimization, and the
            challenges of supporting AI-driven data quality, Stibo Systems is a
            place where learning never stops and every project sharpens your
            technical edge.
          </p>
        </div>

        <div className="workexp-section">
          <h6>Key Responsibilities</h6>
          <ul className="job-desc-list">
            <li>Bridging backend, DevOps, and deployment teams</li>
            <li>
              Handling massive datasets, JVM internals, memory optimization, and
              supporting AI-driven data quality
            </li>
            <li>
              Mentoring junior developers and shaping solution architectures
            </li>
          </ul>
        </div>

        <div className="workexp-section">
          <h6>Tech Stack</h6>
          <div className="job-skills-images">
            <img src={java} alt="Java" />
            <img src={elasticsearch} alt="Elasticsearch" />
            <img src={gradle} alt="Gradle" />
            <img src={react} alt="React" />
            <img src={typescript} alt="TypeScript" />
            <img src={python} alt="Python" />
            <img src={jenkins} alt="Jenkins" />
            <img src={git} alt="git" />
            <img src={spring} alt="Spring" />
            <img src={gwt} alt="GWT" />
            <img src={swing} alt="Java Swing" />
            <img src={osgi} alt="OSGI" />
            <img src={svn} alt="SVN" />
          </div>
        </div>
      </div>

      <hr className="experience-spacer" />
      <br />

      <div className="workexp-job-card">
        <div className="workexp-card-header">
          <img src={via} alt="VIA University College" className="company-img" />
          <div>
            <h5>VIA University College</h5>
            <span className="job-date">09/2021 – now</span>
            <div className="job-role">Student Instructor & Student Guard</div>
          </div>
        </div>

        <div className="workexp-section">
          <h6>Student Instructor (09/2021 – 12/2021)</h6>
          <p>
            As a part-time Java instructor, I learned as much from my students
            as I taught them. Inexperience doesn’t always mean being wrong—fresh
            perspectives often surprised me and challenged my own ways of
            thinking. It reminded me that even as someone who likes to think
            outside the box, there’s always more room to grow.
          </p>
          <p>
            Teaching showed me how important communication is in programming.
            Sometimes, just five extra minutes of explanation or a different
            point of view can save hours of confusion. I really enjoyed
            presenting logical problems and hearing insights from students with
            diverse backgrounds. I encouraged teamwork, open-mindedness, and
            independent projects, and was proud to see several students become
            passionate about game development as a result.
          </p>
        </div>

        <div className="workexp-section">
          <h6>Student Guard (08/2021 – now)</h6>
          <p>
            As a student guard, I help both students and visitors at VIA
            University College. This role has helped me further develop my
            people skills and taught me a lot about patience and cultural
            awareness. Interacting with people from many backgrounds, I’ve
            learned how different perspectives can either cause conflict or lead
            to unique insights, depending on how you approach them. Finding
            common ground and appreciating individual differences has made me a
            better communicator and teammate.
          </p>
        </div>
      </div>

      <hr className="experience-spacer" />
      <br />
      <div className="workexp-job-card">
        <div className="workexp-card-header">
          <img src={cern} alt="CERN" className="company-img" />
          <div>
            <h5>CERN</h5>
            <span className="job-date">08/2020 – 09/2021</span>
            <div className="job-role">DevOps Engineer</div>
          </div>
        </div>

        <div className="workexp-section">
          <h6>Role & Highlights</h6>
          <p>
            As a part of the DevOps team, I was responsible for system design,
            maintenance, and support across multiple projects. My two key
            projects—<span className="about-highlight">CBNG</span> and{" "}
            <span className="about-highlight">Controls Artifact Service</span>
            —became daily tools for the entire CERN Beam Department.
          </p>
        </div>

        <div className="workexp-section">
          <h6>CBNGv4 (CommonBuild Next Generation)</h6>
          <div className="jobskills">
            <ul>
              <li>Java</li>
              <li>Kotlin</li>
              <li>Groovy</li>
              <li>Custom Gradle distribution & plugins</li>
              <li>XML specification reader (Maven compatibility)</li>
              <li>Jenkins & JFrog integration</li>
            </ul>
            <div className="job-skills-images">
              <img src={java} alt="Java" />
              <img src={kotlin} alt="Kotlin" />
              <img src={groovy} alt="Groovy" />
              <img src={gradle} alt="Gradle" />
              <img src={jenkins} alt="Jenkins" />
              <img src={maven} alt="Maven" />
            </div>
          </div>
          <p>
            CBNG is a custom Gradle distribution providing essential tooling for
            developers at CERN. It configures projects to match CERN conventions
            and automates deployment to internal servers via Gradle tasks. The
            plugin architecture allows developers to use only what they need,
            keeping projects lightweight and maintainable. My version, based on
            Gradle 7, improved modularity, versioning, and documentation
            workflows, and supported both JFrog Artifactory and CERN’s internal
            systems.
          </p>
        </div>

        <div className="workexp-section">
          <h6>Controls Artifact Service</h6>
          <div className="jobskills">
            <ul>
              <li>Java</li>
              <li>Spring REST Service</li>
              <li>Two-factor JWT authentication</li>
              <li>Optimized JPA Entity Graph queries</li>
              <li>Angular</li>
            </ul>
            <div className="job-skills-images">
              <img src={java} alt="Java" />
              <img src={gradle} alt="Gradle" />
              <img src={spring} alt="Spring" />
              <img src={jpa} alt="JPA" />
              <img src={jwt} alt="JWT" />
              <img src={angular} alt="Angular" />
              <img src={typescript} alt="Typescript" />
              <img src={scss} alt="Scss" />
              <img src={react} alt="React" />
            </div>
          </div>
          <p>
            CAS is a custom versioning tool for CERN. Instead of specific
            dependency versions, aliases like{" "}
            <span className="about-highlight">PRO</span> indicate the most
            stable release. CAS resolves these aliases in Gradle or Maven
            builds, minimizing downtime and simplifying updates. With thousands
            of dependencies per application, the focus was on reliability and
            speed—leveraging JPA Entity Graph for database efficiency. As a
            frontend, we built an Angular app for live alias management by
            admins.
          </p>
        </div>
      </div>

      <hr className="experience-spacer" />
      <br />
      <div className="workexp-job-card">
        <div className="workexp-card-header">
          <img src={holme} alt="Holme Group" className="company-img" />
          <div>
            <h5>Holme Gruppen ASP</h5>
            <span className="job-date">04/2019 – 08/2020</span>
            <div className="job-role">Web Developer</div>
          </div>
        </div>

        <div className="workexp-section">
          <h6>Role & Overview</h6>
          <p>
            Like many developers, I kicked off my career with web
            development—working with a wide variety of systems and CMSs. This
            was definitely the job where I had to be the most{" "}
            <span className="about-highlight">versatile</span>.
          </p>
        </div>

        <div className="workexp-section">
          <h6>Key Technologies & Platforms</h6>
          <div className="jobskills">
            <ul>
              <li>PHP</li>
              <li>JavaScript & jQuery</li>
              <li>TypeScript</li>
              <li>HTML, SCSS, CSS</li>
              <li>Python, Java, .NET</li>
              <li>WordPress, OpenCart, Prestashop plugins</li>
            </ul>
            <div className="job-skills-images">
              <img src={php} alt="PHP" />
              <img src={js} alt="JavaScript" />
              <img src={typescript} alt="TypeScript" />
              <img src={jquery} alt="jQuery" />
              <img src={html} alt="HTML" />
              <img src={scss} alt="SCSS" />
              <img src={react} alt="React" />
              <img src={angular} alt="Angular" />
              <img src={python} alt="Python" />
              <img src={java} alt="Java" />
              <img src={net} alt=".NET" />
            </div>
          </div>
        </div>

        <div className="workexp-section">
          <h6>Highlights</h6>
          <p>
            Holme Gruppen delivers a huge variety of services, from e-commerce
            shops to financial broker sites and product comparison platforms.
            The work required a high level of{" "}
            <span className="about-highlight">adaptability</span>—sometimes I
            had to learn a new framework or language in hours to resolve urgent
            issues.
          </p>
          <p>
            All sites were live revenue generators, so any downtime meant lost
            profits. This created a high-pressure environment where I learned to
            stay cool and solve problems in a calm, organized way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
