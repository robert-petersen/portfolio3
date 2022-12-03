import React from "react";

const SkillCard = ({skillInfo}) => {
  return (
    <div className="skill_card">
      {skillInfo.icon}
      <h2>{skillInfo.title}</h2>
    </div>
  );
}

export default SkillCard;