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
      <img src={stibo} alt="Stibo Systems" className="company-img" />
      <br />
      <br />
      <h5>Sofware Enginner in Stibo Systems 08/2022 - now </h5>
      <p>
        As a software engineer at Stibo Systems, I design and build new features
        for our industry-leading Master Data Management platform, while also
        diving into legacy code to keep critical systems running smoothly. My
        daily toolkit includes Java, React, Elasticsearch, Gradle, and more,
        giving me the chance to work across both modern and classic
        technologies.
      </p>
      <div className="jobskills">
        <ul>
          <li>Java</li>
          <li>Elasticsearch</li>
          <li>Gradle</li>
          <li>React</li>
          <li>TypeScript</li>
          <li>Python</li>
          <li>Jenkins</li>
          <li>git</li>
          <li>Spring</li>
          <li>GWT</li>
          <li>Java Swing</li>
          <li>OSGI</li>
          <li>SVN</li>
        </ul>
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

      <p>
        At Stibo, I mentor junior developers, shape solution architectures, and
        bridge communication between backend, DevOps, and deployment teams. The
        work is complex and rewarding—we handle massive datasets and push
        performance to the limit, ensuring our data solutions deliver speed and
        reliability at scale.
        <br />
        With deep dives into JVM internals, memory optimization, and the
        challenges of supporting AI-driven data quality, Stibo Systems is a
        place where learning never stops and every project sharpens your
        technical edge.
      </p>
      <hr className="experience-spacer" />
      <br />
      <img src={via} alt="Via Univeristy Collage" className="company-img" />
      <h5>Student Instructor in VIA Horsens 09/2021 - 12/2021</h5>
      <p>
        As a part-time Java instructor, I learned as much from my students as I
        taught them. Inexperience doesn’t always mean being wrong—fresh
        perspectives often surprised me and challenged my own ways of thinking.
        It reminded me that even as someone who likes to think outside the box,
        there’s always more room to grow.
      </p>
      <p>
        Teaching showed me how important communication is in programming.
        Sometimes, just five extra minutes of explanation or a different point
        of view can save hours of confusion. I really enjoyed presenting logical
        problems and hearing insights from students with diverse backgrounds. I
        encouraged teamwork, open-mindedness, and independent projects, and was
        proud to see several students become passionate about game development
        as a result.
      </p>
      <br />
      <h5>Student Guard in VIA Horsens 08/2021 - now</h5>
      <p>
        As a student guard, I help both students and visitors at VIA University
        College. This role has helped me further develop my people skills and
        taught me a lot about patience and cultural awareness. Interacting with
        people from many backgrounds, I’ve learned how different perspectives
        can either cause conflict or lead to unique insights, depending on how
        you approach them. Finding common ground and appreciating individual
        differences has made me a better communicator and teammate.
      </p>
      <hr className="experience-spacer" />
      <br />
      <img src={cern} alt="CERN" className="company-img" />
      <h5>DevOps CERN 08/2020 - 09/2021</h5>
      <p>
        As a part of DevOps team I was responsible for designing systems,
        maintnance and support. I worked on many projects, but two of them -
        CBNG and Controls Artifact Service - were my own "babies" that function
        in CERN and the entire Beam Department is using them on everyday basis.
      </p>
      <br />
      <h6>
        <b>CBNGv4</b>
      </h6>
      <div className="jobskills">
        <ul>
          <li>Java</li>
          <li>Kotlin</li>
          <li>Groovy</li>
          <li>Custom Gradle distribution</li>
          <li>Custom Gradle plugins</li>
          <li>
            XML specification reader (backwards compatibiltiy with old Maven
            solutions)
          </li>
          <li>Jenkins and Jfrog integration</li>
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
        CommonBuild Next Generation is a custom gradle distribution that
        provides the necessery tooling for developers in the CERN ecosystem. It
        is configuring the entire project automatically to fit into the CERN
        convention. It provides the tasks to deploy the application to various
        servers in the internal network by simply calling a gradle task. Plugins
        that provide this functionality make sure that the versioning and
        documentation are in order, and then proceed to test the codebase and
        deploy it to both Jfrog artifactory and the CERN Network File System. It
        is a huge project, which focuses on extendability and ease of
        maintnance. Thanks to separating functionalities into small plugins,
        developers don't have to use the entire distirbution, but they can pick
        only the desired plugins in order to keep their projects lightweight.
        The version of CBNG that I have developed is based on the Gradle
        distirbution version 7.
      </p>
      <br />
      <h6>
        <b>Controls Artifact Service</b>
      </h6>
      <div className="jobskills">
        <ul>
          <li>Java</li>
          <li>Spring Rest Service</li>
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
          <img src={react} alt="react" />
        </div>
      </div>

      <p>
        CAS is a tool for custom CERN versioning. In CERN instead of using a
        specific version of the dependency, like f.e. "4.2.1", aliases are used
        instead. The most common is called "PRO", which stands for the most
        stable new version of the dependency. When people specify their
        dependencies in Gradle or Maven project, CBNG calls CAS to resolve the
        alias into the actual version. This solution makes DevOps much more
        prepared for emergencies, since any dependency conflicts are easily
        resolved by marking a new version as PRO instead. Thanks to that the
        downtime is minimalized in case of any updates, and the operators always
        have a fallback version. Since some applications have thousands of
        dependencies, the main focus was reliability and speed. JPA Entity Graph
        proved to be an incredibly powerful tool for connecting with the
        database. As a frontend for the services, me and my team created an
        Angular app that allows to modify aliases at real time for people with
        administrative rights.
      </p>
      <hr className="experience-spacer" />
      <br />
      <img src={holme} alt="Holme Group" className="company-img" />
      <h5>Web developer Holme Gruppen ASP 04/2019 - 08/2020</h5>
      <p>
        As most of the developers I have kicked-off my career with web
        development. I worked with quite a variety of systems and CMSs. This was
        definietely the job where I had to be the most versatile.
      </p>
      <div className="jobskills">
        <ul>
          <li>PHP</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>HTML, SCSS, CSS</li>
          <li>Python</li>
          <li>Java</li>
          <li>.NET</li>
          <li>Writing WordPress plugins</li>
          <li>Writing OpenCart plugins</li>
          <li>Writing Prestashop plugins</li>
        </ul>
        <div className="job-skills-images">
          <img src={php} alt="PHP" />
          <img src={js} alt="JavaScript" />
          <img src={typescript} alt="TypeScript" />
          <img src={jquery} alt="jQuery" />
          <img src={html} alt="HTML" />
          <img src={scss} alt="scss" />
          <img src={react} alt="react" />
          <img src={angular} alt="Angular" />
          <img src={python} alt="Python" />
          <img src={java} alt="Java" />
          <img src={net} alt=".NET" />
        </div>
      </div>

      <p>
        HolmeGruppen has a huge variety of services. They have many e-commerce
        shops, websites that act as brokers for bank loans and even websites
        with rankings and comaprisons of products. Therefore, high level of
        adapdability was required. Sometimes I had to learn a compeltely new
        framework or language in a matter of hours in order to handle the issue.
        On top of that, all the websites were making money live, so any downtime
        resulted in loss of profit. This resulted in a very high-pressure
        environement. Thanks to this job I learned to keep my head cool and
        handle the problems in an organized way.
      </p>
    </div>
  );
};

export default Experience;
