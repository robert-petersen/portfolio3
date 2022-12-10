import React from "react";

const ProjectCard = ({projectInfo}) => {
  return (
    <div className="projectCard_container">
      <div className="projectCard_content">
        <img className="projectCard_img" src={projectInfo.img} alt={projectInfo.alt} />
        <h2>{projectInfo.title}</h2>
        <p>{projectInfo.description}</p>
      </div>
      <div className="links_conatiner">
        { 
          projectInfo.isRepo //can change to check for empty string in link
            ? <a className="repo_link" href={projectInfo.repoLink} target="_blank" rel="noreferrer">GitHub Repo</a> 
            : ""
        }
        { 
          projectInfo.isDeploy 
            ? <a className="deploy_link" href={projectInfo.deployLink} target="_blank" rel="noreferrer">Deployed Site</a> 
            : ""
        }
        { 
          projectInfo.isBlog 
            ? <a className="deploy_link" href={projectInfo.blogLink} target="_blank" rel="noreferrer">View Project Blog</a> 
            : ""
        }
      </div>
    </div>
  );
}

export default ProjectCard;