import React from "react";
import ProjectCard from "./ProjectCard";
import {projectData} from "./projectData";

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="projects_heading">What I've Created</h1>
      <div className="projects_container">
        {
          projectData.map((projectInfo, index) => {
            return <ProjectCard key={index} projectInfo={projectInfo}/>
          })
        }
      </div>
    </section>
  );
}

export default Projects;