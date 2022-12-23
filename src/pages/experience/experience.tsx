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
        As a full time software engineer in Stibo Sytems I was responsible for quite a few things.
        Not only were we developing new features for the Data Management System being sold
        by the company, but also we were maintaining legacy code from early 2000's.
        Stibo is using variety of technologies which let me futher expand my skillset.    
      </p>
      <div className="jobskills">
        <ul>
          <li>Java</li>
          <li>GWT</li>
          <li>Java Swing</li>
          <li>Jenkins</li>
          <li>Gradle</li>
          <li>OSGI</li>
          <li>React</li>
          <li>Typescript</li>
          <li>SVN</li>
        </ul>
        <div className="job-skills-images">
          <img src={java} alt="Java" />
          <img src={gwt} alt="GWT" />
          <img src={swing} alt="Java Swing" />
          <img src={jenkins} alt="Jenkins" />
          <img src={gradle} alt="Gradle" />
          <img src={osgi} alt="OSGI" />
          <img src={react} alt="react" />
          <img src={typescript} alt="Typescript" />
          <img src={svn} alt="SVN" />
        </div>
      </div>

      <p>
        Stibo Systems is an exciting place to work at. It deals with both new and old technologies, 
        which forces engineers to keep their skillset updated, but also teaches them how to handle 
        problems caused by legacy code. Stibo has a lot of custom solutions that are very complex
        and require deep understanding of the inner workings of JVM and memory. In order to deal with
        huge amount of data high level of memory optimization is required to makes user experience
        as friendly as possible.
      </p>
      <hr className="experience-spacer" />
      <br />
      <img src={via} alt="Via Univeristy Collage" className="company-img" />
      <h5>Student Instructor in VIA Horsens 09/2021 - 12/2021</h5>
      <p>
        I was a part time Java instructor in VIA Univeristy College. I have learned
        quite a few things in my job:
      </p>
      <ul>
        <li>
          Inexperienced doesn't necessarily mean wrong. Young minds that aren't
          tainted by our programming paradigms and everday object oriented
          thinking managed to surprise me more than once. Sometimes my students
          were teaching me instead. Although I was always considering myself as
          a person who is able to think out of the box, I was proved that there
          is still huge room for improvement for me.
        </li>
        <li>
          We programmers tend to be too technical. I noticed how many problems in
          my job as a developer could have been prevented if only we worked more
          on our communication. Sometimes 5 more minutes of a conversation and
          additional explanation of the same thing from another perspective can
          save hours of time.
        </li>
      </ul>
      <p>
        Shaping young minds was extremely satisfying for me. I loved presenting
        logical problems and hearing input from people with such a various
        background. I was sharing my knowledge about the field with my students
        and on every lesson I was reminding them how important is teamwork and
        open mindness in our profession. I have ecnouraged them to work on their
        own projects outside of the school curriculum, which resulted in quite
        few passionate young game developers with a lot of potential.
      </p>
      <br />
      <h5>Student Guard in VIA Horsens 08/2021 - now</h5>
      <p>
        I am a student guard in VIA Univeristy College. I am responsible for
        helping students and external guests visiting our school. This job
        allowed me to develop my people skills even further. Various backgrounds
        and cultural differences tend to clash from time to time. Depending on
        the approach it can result in conflict or in projects with a deep
        insight thanks to different perspectives. Finding the best in people
        taught me patience and appreciation of the differences in personalities.
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
        is a huge project, which focuses on extendability and ease of maintnance.
        Thanks to separating functionalities into small plugins, developers
        don't have to use the entire distirbution, but they can pick only the
        desired plugins in order to keep their projects lightweight. The version
        of CBNG that I have developed is based on the Gradle distirbution
        version 7.
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
