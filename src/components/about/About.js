import React from "react";
import Robert from "../../images/me.jpg";
import AboutSkill from "./AboutSkill";
import {aboutDataSet} from "./aboutData";

function About() {
  return (
    <article id="about">
      <section className="about_me_conatiner">
        <div className="about_me_top">
          <img className="about_photo" src={Robert} alt="Robert Petersen"/>
          <div className="about_education_container">
            <h2>My Education</h2>
            <div>
              <a 
                href="https://lambdaschool.com/homepage" 
                target="_blank" 
                rel="noreferrer"
              >
                <img src="https://everipedia-storage.s3.amazonaws.com/ProfilePics/lambda-school__38385.jpeg" alt="Lambda Logo" />
              </a>
              <h3>Lambda School 2020 - 2021</h3>
            </div>
            <h4>Full-Stack Web Development</h4>
          </div>
        </div>
        <div className="about_me_botom">
          <h2>Hello, I'm Robert Petersen.</h2>
          <p>
            I am a full-stack web developer who loves problem solving and building web applications from the ground up. When I'm not coding I enjoy playing video games, watching anything Star Wars, fishing, hiking, camping, and walking with my dog. I come from a retail background and have skills in customer service, sales, lower management, and time management. If you would like to know more about me check out my
            <a 
              href="https://www.linkedin.com/in/robert-petersen808/" 
              target="_blank" 
              rel="noreferrer"
            > LinkedIn profile </a>
            or my
            <a 
              href="https://resume.io/r/FFjx1r7fT" 
              target="_blank" 
              rel="noreferrer"
            > resume</a>.
          </p>
        </div>
      </section>
      <section className="about_skills_container">
        {
          aboutDataSet.map((info, index)=>{
            return <AboutSkill key={index} info={info}/>;
          })
        }
      </section>
    </article>
  );
}

export default About;