import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import SocialCard from "./SocialCard";
import { socialData } from "./socialData";

const Contact = () => {
  return (
    <footer id="contact">
      <section className="contact_content_container">
        <div className="contact_content">
          <h1>Contact Me</h1>
          <p>
            If you would like to get in touch with me about job opportunities or to work on a project together, feel free to do so by messaging me on <a href="https://www.linkedin.com/in/robert-petersen808/" target="_blank" rel="noreferrer">LinkedIn</a> or by sending an email to my business email: <span>robert.petersen808@gmail.com</span>. Check out my social media and projects I've been working on below!
          </p>
          <div className="contact_socials_container">
            {
              socialData.map((socialInfo, index) => {
                return <SocialCard key={index} socialInfo={socialInfo}/>;
              })
            }
          </div>
        </div>
      </section>
      <section className="contact_copyright">
        <FaRegCopyright className="copyright_icon"/>
        <h4>Robert Petersen 2022</h4>
      </section>
    </footer>
  );
}

export default Contact;