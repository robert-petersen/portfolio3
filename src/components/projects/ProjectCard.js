import React from "react";

const ProjectCard = ({projectInfo}) => {
  return (
    <section className="projectCard_container">
      <div className="projectCard_content">
        <img className="projectCard_img" src={projectInfo.img} alt={projectInfo.alt} />
        <h2 className="projectCard_title">{projectInfo.title}</h2>
        <p className="projectCard_description">{projectInfo.description}</p>
      </div>
      <div className="links_conatiner">
        { 
          projectInfo.repoLink === "" 
            ? "" 
            : <a className="link" href={projectInfo.repoLink} target="_blank" rel="noreferrer">GitHub Repo</a>
        }
        { 
          projectInfo.deployLink === "" 
            ? ""
            : <a className="link" href={projectInfo.deployLink} target="_blank" rel="noreferrer">Deployed Site</a>
        }
        { 
          projectInfo.blogLink === "" 
            ? "" 
            : <a className="link" href={projectInfo.blogLink} target="_blank" rel="noreferrer">View Project Blog</a>
        }
      </div>
    </section>
  );
}

export default ProjectCard;