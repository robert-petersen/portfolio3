import React from "react";

function AboutSkill({info}) {
  return (
    <div className="about_skill_card">
      {info.icon}
      <h1 className="about_skill_title">{info.title}</h1>
      <p className="about_skill_description">{info.description}</p>
    </div>
  );
}

export default AboutSkill;