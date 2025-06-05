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
  FaDatabase,
  FaRobot,
  FaFileCode,
  FaLinux,
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
  SiGooglecloud,
  SiJsonwebtokens,
  SiGrafana,
  SiPrometheus,
  SiNginx,
} from "react-icons/si";
import { DiDjango } from "react-icons/di";
import { RiJavaLine } from "react-icons/ri";
import {
  GiArtificialIntelligence,
  GiBrain,
  GiRazorBlade,
} from "react-icons/gi";
import { IconType } from "react-icons";
import { TbBrandAzure } from "react-icons/tb";

// Color scheme to fit your playful yet professional look!
const colors = [
  "#f7faff", // very light blue
  "#e6f0fa", // very soft blue
  "#f8f0ff", // lavender
  "#e2ffe9", // mint
  "#fff8e7", // soft cream
  "#f9ecec", // blush
  "#fff4f0", // peach
  "#e3f6ff", // icy blue
  "#fff3ec", // orange-tinted white
  "#f1ecff", // purple-tinted white
  "#eafff8", // seafoam
  "#f7f9fa", // blue-tinted white
  "#f4fffa", // super soft green
  "#fffbec", // pastel yellow
  "#f8f5ff", // violet
  "#f0f4f8", // neutral light
  "#ffeef8", // light pink
  "#f3f8ff", // cloudy blue
  "#fffaf4", // paper white
  "#f9fcff", // icy white
  "#ebffef", // green white
  "#ffedf2", // pink
  "#f7e6ff", // light purple
  "#e0fff5", // minty white
  "#fcf8ff", // pastel violet
];

export const techIcons: Record<
  string,
  { icon: IconType; text: string; color: string }
> = {
  Java: { icon: FaJava, text: "Java", color: colors[0] },
  React: { icon: FaReact, text: "ReactJS", color: colors[1] },
  PHP: { icon: FaPhp, text: "PHP", color: colors[2] },
  ".NET": { icon: SiDotnet, text: ".NET", color: colors[3] },
  Python: { icon: FaPython, text: "Python", color: colors[4] },
  Gradle: { icon: SiGradle, text: "Gradle plugins", color: colors[5] },
  JavaScript: { icon: SiJavascript, text: "JavaScript", color: colors[6] },
  JQuery: { icon: SiJquery, text: "JQuery", color: colors[7] },
  Angular: { icon: SiAngular, text: "AngularJS", color: colors[8] },
  MySQL: { icon: SiMysql, text: "MySQL", color: colors[9] },
  PostgreSQL: { icon: SiPostgresql, text: "PostgreSQL", color: colors[10] },
  TypeScript: { icon: SiTypescript, text: "Typescript", color: colors[11] },
  Jenkins: { icon: FaJenkins, text: "Jenkins", color: colors[12] },
  Android: { icon: FaAndroid, text: "Android", color: colors[13] },
  Spring: { icon: SiSpring, text: "Spring", color: colors[14] },
  Groovy: { icon: SiApachegroovy, text: "Groovy", color: colors[15] },
  Kotlin: { icon: SiKotlin, text: "Kotlin", color: colors[16] },
  SCSS: { icon: SiSass, text: "SCSS", color: colors[17] },
  "Shell scripts": {
    icon: SiGnubash,
    text: "Shell scripts",
    color: colors[18],
  },
  GIT: { icon: FaGitAlt, text: "GIT", color: colors[19] },
  HTML: { icon: FaHtml5, text: "HTML", color: colors[20] },
  SOAP: { icon: FaSoap, text: "SOAP", color: colors[21] }, // playful soap bar
  Unity: { icon: FaUnity, text: "Unity", color: colors[22] },
  Elasticsearch: {
    icon: SiElasticsearch,
    text: "Elasticsearch",
    color: colors[23],
  },
  "Machine learning": {
    icon: GiArtificialIntelligence,
    text: "Machine learning",
    color: colors[24],
  },
  "Neural network": { icon: GiBrain, text: "Neural network", color: colors[2] },
  JPA: { icon: FaDatabase, text: "JPA", color: colors[0] },
  JavaFX: { icon: RiJavaLine, text: "JavaFX", color: colors[1] },
  "Azure Cloud": { icon: TbBrandAzure, text: "Azure Cloud", color: colors[2] },
  Django: { icon: DiDjango, text: "Django", color: colors[3] },
  JWT: { icon: SiJsonwebtokens, text: "JWT", color: colors[4] },
  "Google Cloud": {
    icon: SiGooglecloud,
    text: "Google Cloud",
    color: colors[5],
  },
  C: { icon: FaFileCode, text: "C", color: colors[6] },
  FreeRTOS: { icon: FaRobot, text: "FreeRTOS", color: colors[7] },
  Razor: { icon: GiRazorBlade, text: "Razor", color: colors[8] },
  bash: { icon: SiGnubash, text: "Bash", color: colors[9] },
  tensorflow: { icon: SiTensorflow, text: "TensorFlow", color: colors[10] },
  Linux: { icon: FaLinux, text: "Linux", color: colors[11] },
  Grafana: { icon: SiGrafana, text: "Grafana", color: colors[12] },
  Prometheus: { icon: SiPrometheus, text: "Prometheus", color: colors[13] },
  Nginx: { icon: SiNginx, text: "Nginx", color: colors[14] },
};
