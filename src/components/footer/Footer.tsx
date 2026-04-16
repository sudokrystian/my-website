import {
  FaLinkedin,
  FaWhatsappSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaGitlab,
} from "react-icons/fa";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer-div">
      <a
        href="https://www.linkedin.com/in/krystian-gołuch-6996aa128"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="footer-icon" />
      </a>
      <a
        href="https://wa.me/4591980198"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
      >
        <FaWhatsappSquare className="footer-icon" />
      </a>
      <a
        href="https://facebook.com/sudokrystian"
        target="_blank"
        rel="noreferrer"
        aria-label="Facebook"
      >
        <FaFacebookSquare className="footer-icon" />
      </a>
      <a
        href="https://github.com/sudokrystian"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <FaGithubSquare className="footer-icon" />
      </a>
      <a
        href="https://gitlab.com/sudokrystian/"
        target="_blank"
        rel="noreferrer"
        aria-label="GitLab"
      >
        <FaGitlab className="footer-icon" />
      </a>
    </div>
  );
};

export default Footer;
