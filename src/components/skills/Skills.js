import React from "react";
import SkillCard from "./SkillCard";
import { languageData, libData, toolData } from "./skillsData";

const Skills = () => {
  return (
    <article id="skills">
      <section className="skills_container">
        <h1>Languages</h1>
        <div className="skill_card_container">
          {
            languageData.map((skillInfo, index) => {
              return <SkillCard key={index} skillInfo={skillInfo}/>
            })
          }
        </div>
      </section>
      <section className="skills_container">
        <h1>Frameworks and Libraries</h1>
        <div className="skill_card_container">
          {
            libData.map((skillInfo, index) => {
              return <SkillCard key={index} skillInfo={skillInfo}/>
            })
          }
        </div>
      </section>
      <section className="skills_container">
        <h1>Tools</h1>
        <div className="skill_card_container">
          {
            toolData.map((skillInfo, index) => {
              return <SkillCard key={index} skillInfo={skillInfo}/>
            })
          }
        </div>
      </section>
    </article>
  );
}

export default Skills;