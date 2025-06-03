import phone from "../../assets/my_pictures/new/phone.webp";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact-div">
      <h3 className="contact-title">Contact me</h3>
      <hr />
      <p>
        You are always welcome to contact me if you have any questions. You can
        reach out to me on:
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/krystian-gołuch-6996aa128"
              className="contact-linkedin bold-600"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/4591980198"
              className="contact-whatsapp bold-600"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              WhatsApp
            </a>{" "}
          </li>
          <li>
            <a
              href="https://m.me/sudokrystian"
              className="contact-messenger bold-600"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Messenger{" "}
            </a>
          </li>
        </ul>
        I will get back to you as soon as possible.
      </p>
      <img src={phone} alt="Call Me" />
    </div>
  );
};

export default Contact;
