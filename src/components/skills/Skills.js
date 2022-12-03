import React from "react";
import SkillCard from "./SkillCard";
import { skillData, toolData } from "./skillsData";

const Skills = () => {
  return (
    <section id="skills">
      <div className="skills_container">
        <h1>Languages, Frameworks, and Libraries</h1>
        <div className="skill_card_container">
          {
            skillData.map((skillInfo, index) => {
              return <SkillCard key={index} skillInfo={skillInfo}/>
            })
          }
        </div>
      </div>
      <div className="skills_container">
        <h1>Tools</h1>
        <div className="skill_card_container">
          {
            toolData.map((skillInfo, index) => {
              return <SkillCard key={index} skillInfo={skillInfo}/>
            })
          }
        </div>
      </div>
    </section>
  );
}

export default Skills;