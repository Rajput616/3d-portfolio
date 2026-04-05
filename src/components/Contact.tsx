import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="mailto:saurabh6.jobs@gmail.com"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                saurabh6.jobs@gmail.com
              </a>
            </p>
            <p>
              <a
                href="tel:+916360522060"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                +91-6360522060
              </a>
            </p>
            <h4>Education</h4>
            <p>
              Bachelor of Technology, DCRUST University Haryana, India
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Rajput616"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/rajput616-5yoe/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Saurabh Singh</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
