import React, { useState } from "react";

const SocialCard = ({socialInfo}) => {
  const [social, setSocial] = useState("");
  
  const onHover = (thisSocial) => {
    setSocial(thisSocial);
  }
  
  return(
    <div className="social_card">
      <a 
        className="social_link"
        href={socialInfo.link} 
        target="_blank" 
        rel="noreferrer"
        onMouseEnter={() => onHover(socialInfo.name)} 
        onMouseLeave={() => onHover("")}
      >{socialInfo.icon}</a>
      <h4 className={
        social === socialInfo.name
        ? "tooltip unhide"
        : "tooltip"}
      >{socialInfo.name}</h4>
    </div>
  );
}

export default SocialCard;