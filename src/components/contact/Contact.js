import React, {useState} from "react";
import { FaLinkedin, FaGithub, FaMediumM, FaPenSquare, FaRegCopyright } from "react-icons/fa";

const Contact = () => {
  const [hover, setHover] = useState(false);
  const [social, setSocial] = useState("");

  const onHover = (thisSocial) => {
    setHover(!hover);
    setSocial(thisSocial);
  }

  return (
    <section id="contact">
      <div className="contact_content_container">
        <div className="contact_content">
          <h1>Contact Me</h1>
          <p>
            If you would like to get in touch with me about job opportunities or to work on a project together, feel free to do so by messaging me on <a href="https://www.linkedin.com/in/robert-petersen808/" target="_blank" rel="noreferrer">LinkedIn</a> or by sending an email to my business email: <span>robert.petersen808@gmail.com</span>.
          </p>
        </div>
        <div className="contact_content">
          <h1>Check Out More</h1>
          <p>Check out my social media and projects I've been working on here!</p>
          <div className="contact_socials_container">
            <a 
              className="social_link"
              href="https://www.linkedin.com/in/robert-petersen808/" 
              target="_blank" 
              rel="noreferrer"
              onMouseEnter={() => onHover("linkedIn")} 
              onMouseLeave={() => onHover("")}
            >
              <FaLinkedin className="icon"/>
              <span className={
                  hover === true && social === "linkedIn" 
                  ? "tooltip unhide"
                  : "tooltip"
                }>LinkedIn
              </span>
            </a>
            <a 
              className="social_link"
              href="https://github.com/robert-petersen" 
              target="_blank" 
              rel="noreferrer"
              onMouseEnter={() => onHover("github")} 
              onMouseLeave={() => onHover("")}
            >
              <FaGithub className="icon"/>
              <span className={
                  hover === true && social === "github" 
                  ? "tooltip unhide"
                  : "tooltip"
                }>GitHub
              </span>
            </a>
            <a 
              className="social_link"
              href="https://robert-petersen.medium.com/" 
              target="_blank" 
              rel="noreferrer"
              onMouseEnter={() => onHover("medium")} 
              onMouseLeave={() => onHover("")}
            >
              <FaMediumM className="icon"/>
              <span className={
                  hover === true && social === "medium" 
                  ? "tooltip unhide"
                  : "tooltip"
                }>Medium
              </span>
            </a>
            <a 
              className="social_link"
              href="https://resume.io/r/FFjx1r7fT" 
              target="_blank" 
              rel="noreferrer"
              onMouseEnter={() => onHover("resume")} 
              onMouseLeave={() => onHover("")}
            >
              <FaPenSquare className="icon"/>
              <span className={
                  hover === true && social === "resume" 
                  ? "tooltip unhide"
                  : "tooltip"
                }>Resume
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="contact_copyright">
        <FaRegCopyright className="copyright_icon"/>
        <h4>Robert Petersen 2022</h4>
      </div>
    </section>
  );
}

export default Contact;