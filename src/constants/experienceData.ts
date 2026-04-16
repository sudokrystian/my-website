import stibo from "../assets/experience/stibo.png";
import stiboAbout from "../assets/about/stibo.png";
import via from "../assets/experience/via.png";
import cern from "../assets/experience/cern.png";
import holme from "../assets/experience/holmegroup.png";
import maskinmesterskole from "../assets/about/maskinmesterskole.png";

// Technology images
import java from "../assets/experience/technologies/java.png";
import swing from "../assets/experience/technologies/swing.png";
import kotlin from "../assets/experience/technologies/kotlin.png";
import groovy from "../assets/experience/technologies/groovy.png";
import gradle from "../assets/experience/technologies/gradle.png";
import jenkins from "../assets/experience/technologies/jenkins.png";
import maven from "../assets/experience/technologies/maven.png";
import spring from "../assets/experience/technologies/spring.png";
import jpa from "../assets/experience/technologies/jpa.png";
import jwt from "../assets/experience/technologies/jwt.png";
import net from "../assets/experience/technologies/.NET.png";
import python from "../assets/experience/technologies/python.png";
import reactImg from "../assets/experience/technologies/react.png";
import angular from "../assets/experience/technologies/angular.png";
import scssImg from "../assets/experience/technologies/scss.png";
import html from "../assets/experience/technologies/html.png";
import jquery from "../assets/experience/technologies/jquery.png";
import typescript from "../assets/experience/technologies/typescript.png";
import js from "../assets/experience/technologies/js.png";
import php from "../assets/experience/technologies/php.png";
import gwt from "../assets/experience/technologies/gwt.png";
import osgi from "../assets/experience/technologies/osgi.png";
import svn from "../assets/experience/technologies/svn.png";
import elasticsearch from "../assets/experience/technologies/elasticsearch.png";
import git from "../assets/experience/technologies/git.png";
import neuralNetwork from "../assets/experience/technologies/neural-network.webp";

export interface ExperienceSummary {
  company: string;
  logo: string;
  date: string;
  role: string;
  bullets: string[];
}

export interface TechImage {
  src: string;
  alt: string;
}

export interface ExperienceDetail {
  company: string;
  logo: string;
  date: string;
  role: string;
  sections: { title: string; content: string; bullets?: string[] }[];
  techImages: TechImage[];
}

export interface Education {
  school: string;
  logo: string;
  date: string;
  title: string;
  bullets: string[];
}

// Shared between About (summary) and Experience (detail) pages
export const experienceSummaries: ExperienceSummary[] = [
  {
    company: "Stibo Systems",
    logo: stiboAbout,
    date: "08/2022 – now",
    role: "Full Stack Software Engineer, System design",
    bullets: [
      "Building and optimizing search systems with Java, Elasticsearch and React",
      "Mentoring junior developers and designing solution architecture",
      "Bridging backend, DevOps, and deployment teams across projects",
    ],
  },
  {
    company: "CERN",
    logo: cern,
    date: "08/2020 – 09/2021",
    role: "DevOps, System Design",
    bullets: [
      "Author of a new version of CBNG — custom Gradle build tool",
      "Co-author of Controls Artifact Service — Spring REST service",
      "Support for Java, Groovy, Kotlin, Bash scripts in legacy applications",
    ],
  },
  {
    company: "Holme Gruppen ASP",
    logo: holme,
    date: "04/2019 – 08/2020",
    role: "Full Stack Web Developer, System Design",
    bullets: [
      "Maintenance and further development of old systems (PHP 5.3)",
      "Creating automated systems for loans and RKI verification",
      "Writing custom plugins for WordPress and PrestaShop with PHP 7",
      "Designing and implementing new websites",
    ],
  },
];

export const experienceDetails: ExperienceDetail[] = [
  {
    company: "Stibo Systems",
    logo: stibo,
    date: "08/2022 – now",
    role: "Full Stack Software Engineer",
    sections: [
      {
        title: "Role & Impact",
        content:
          "I design and build new features for our industry-leading Master Data Management platform, while also diving into legacy code to keep critical systems running smoothly. Java, React, Elasticsearch, Gradle, and more are my daily toolkit, allowing me to work across both modern and classic technologies.",
      },
      {
        title: "My Work at Stibo",
        content:
          "I mentor junior developers, shape solution architectures, and bridge communication between backend, DevOps, and deployment teams. The work is complex and rewarding—we handle massive datasets and push performance to the limit, ensuring our data solutions deliver speed and reliability at scale.\n\nWith deep dives into JVM internals, memory optimization, and the challenges of supporting AI-driven data quality, Stibo Systems is a place where learning never stops and every project sharpens your technical edge.",
      },
      {
        title: "Key Responsibilities",
        content: "",
        bullets: [
          "Bridging backend, DevOps, and deployment teams",
          "Handling massive datasets, JVM internals, memory optimization, and supporting AI-driven data quality",
          "Mentoring junior developers and shaping solution architectures",
        ],
      },
    ],
    techImages: [
      { src: java, alt: "Java" },
      { src: elasticsearch, alt: "Elasticsearch" },
      { src: gradle, alt: "Gradle" },
      { src: reactImg, alt: "React" },
      { src: typescript, alt: "TypeScript" },
      { src: python, alt: "Python" },
      { src: jenkins, alt: "Jenkins" },
      { src: git, alt: "git" },
      { src: spring, alt: "Spring" },
      { src: gwt, alt: "GWT" },
      { src: swing, alt: "Java Swing" },
      { src: osgi, alt: "OSGI" },
      { src: svn, alt: "SVN" },
    ],
  },
  {
    company: "VIA University College",
    logo: via,
    date: "09/2021 – now",
    role: "Student Instructor & Student Guard",
    sections: [
      {
        title: "Student Instructor (09/2021 – 12/2021)",
        content:
          "As a part-time Java instructor, I learned as much from my students as I taught them. Inexperience doesn't always mean being wrong—fresh perspectives often surprised me and challenged my own ways of thinking. It reminded me that even as someone who likes to think outside the box, there's always more room to grow.\n\nTeaching showed me how important communication is in programming. Sometimes, just five extra minutes of explanation or a different point of view can save hours of confusion. I really enjoyed presenting logical problems and hearing insights from students with diverse backgrounds. I encouraged teamwork, open-mindedness, and independent projects, and was proud to see several students become passionate about game development as a result.",
      },
      {
        title: "Student Guard (08/2021 – now)",
        content:
          "As a student guard, I help both students and visitors at VIA University College. This role has helped me further develop my people skills and taught me a lot about patience and cultural awareness. Interacting with people from many backgrounds, I've learned how different perspectives can either cause conflict or lead to unique insights, depending on how you approach them. Finding common ground and appreciating individual differences has made me a better communicator and teammate.",
      },
    ],
    techImages: [
      { src: java, alt: "Java" },
      { src: python, alt: "Python" },
      { src: reactImg, alt: "React" },
      { src: spring, alt: "Spring" },
      { src: neuralNetwork, alt: "Neural Network" },
      { src: git, alt: "git" },
    ],
  },
  {
    company: "CERN",
    logo: cern,
    date: "08/2020 – 09/2021",
    role: "DevOps Engineer",
    sections: [
      {
        title: "Role & Highlights",
        content:
          "As a part of the DevOps team, I was responsible for system design, maintenance, and support across multiple projects. My two key projects—CBNG and Controls Artifact Service—became daily tools for the entire CERN Beam Department.",
      },
      {
        title: "CBNGv4 (CommonBuild Next Generation)",
        content:
          "CBNG is a custom Gradle distribution providing essential tooling for developers at CERN. It configures projects to match CERN conventions and automates deployment to internal servers via Gradle tasks. The plugin architecture allows developers to use only what they need, keeping projects lightweight and maintainable. My version, based on Gradle 7, improved modularity, versioning, and documentation workflows, and supported both JFrog Artifactory and CERN's internal systems.",
        bullets: [
          "Java",
          "Kotlin",
          "Groovy",
          "Custom Gradle distribution & plugins",
          "XML specification reader (Maven compatibility)",
          "Jenkins & JFrog integration",
        ],
      },
      {
        title: "Controls Artifact Service",
        content:
          "CAS is a custom versioning tool for CERN. Instead of specific dependency versions, aliases like PRO indicate the most stable release. CAS resolves these aliases in Gradle or Maven builds, minimizing downtime and simplifying updates. With thousands of dependencies per application, the focus was on reliability and speed—leveraging JPA Entity Graph for database efficiency. As a frontend, we built an Angular app for live alias management by admins.",
        bullets: [
          "Java",
          "Spring REST Service",
          "Two-factor JWT authentication",
          "Optimized JPA Entity Graph queries",
          "Angular",
        ],
      },
    ],
    techImages: [
      { src: java, alt: "Java" },
      { src: kotlin, alt: "Kotlin" },
      { src: groovy, alt: "Groovy" },
      { src: gradle, alt: "Gradle" },
      { src: jenkins, alt: "Jenkins" },
      { src: maven, alt: "Maven" },
      { src: spring, alt: "Spring" },
      { src: jpa, alt: "JPA" },
      { src: jwt, alt: "JWT" },
      { src: angular, alt: "Angular" },
      { src: typescript, alt: "Typescript" },
      { src: scssImg, alt: "Scss" },
      { src: reactImg, alt: "React" },
    ],
  },
  {
    company: "Holme Gruppen ASP",
    logo: holme,
    date: "04/2019 – 08/2020",
    role: "Web Developer",
    sections: [
      {
        title: "Role & Overview",
        content:
          "Like many developers, I kicked off my career with web development—working with a wide variety of systems and CMSs. This was definitely the job where I had to be the most versatile.",
      },
      {
        title: "Key Technologies & Platforms",
        content: "",
        bullets: [
          "PHP",
          "JavaScript & jQuery",
          "TypeScript",
          "HTML, SCSS, CSS",
          "Python, Java, .NET",
          "WordPress, OpenCart, Prestashop plugins",
        ],
      },
      {
        title: "Highlights",
        content:
          "Holme Gruppen delivers a huge variety of services, from e-commerce shops to financial broker sites and product comparison platforms. The work required a high level of adaptability—sometimes I had to learn a new framework or language in hours to resolve urgent issues.\n\nAll sites were live revenue generators, so any downtime meant lost profits. This created a high-pressure environment where I learned to stay cool and solve problems in a calm, organized way.",
      },
    ],
    techImages: [
      { src: php, alt: "PHP" },
      { src: js, alt: "JavaScript" },
      { src: typescript, alt: "TypeScript" },
      { src: jquery, alt: "jQuery" },
      { src: html, alt: "HTML" },
      { src: scssImg, alt: "SCSS" },
      { src: reactImg, alt: "React" },
      { src: angular, alt: "Angular" },
      { src: python, alt: "Python" },
      { src: java, alt: "Java" },
      { src: net, alt: ".NET" },
    ],
  },
];

export const educationData: Education[] = [
  {
    school: "VIA Horsens",
    logo: via,
    date: "2018 – 2022",
    title: "ICT Software Engineering",
    bullets: [
      "System architecture",
      "Agile driven development",
      "Full-stack Software Engineering",
    ],
  },
  {
    school: "Erhvervsakademi Aarhus",
    logo: maskinmesterskole,
    date: "2016 – 2018",
    title: "Automotive Technology",
    bullets: [
      "ECU programming",
      "Physics and Mathematics",
      "Engine design",
    ],
  },
];
