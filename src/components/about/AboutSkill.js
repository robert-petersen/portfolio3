import React from "react";

function AboutSkill(props) {
  return (
    <div className="About_skill_card">
      {props.icon}
      <h1 className="about_skill_title">{props.title}</h1>
      <p className="about_skill_description">{props.description}</p>
    </div>
  );
}

export default AboutSkill;