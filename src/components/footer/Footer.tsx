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
        <i className="fab fa-linkedin footer-icon"></i>
      </a>
      <a
        href="https://wa.me/4591980198"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
      >
        <i className="fab fa-whatsapp-square footer-icon"></i>
      </a>
      <a
        href="https://facebook.com/sudokrystian"
        target="_blank"
        rel="noreferrer"
        aria-label="Facebook"
      >
        <i className="fab fa-facebook-square footer-icon"></i>
      </a>
      <a
        href="https://github.com/sudokrystian"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <i className="fab fa-brands fa-github-square footer-icon"></i>
      </a>
      <a
        href="https://gitlab.com/sudokrystian/"
        target="_blank"
        rel="noreferrer"
        aria-label="GitLab"
      >
        <i className="fab fa-gitlab footer-icon"></i>
      </a>
    </div>
  );
};

export default Footer;
