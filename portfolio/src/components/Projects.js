import React from "react";
import ProjectCard from "./ProjectCard";
import "../css/projects.css";

const Projects = props => (
  <div className="projects">
    {props.projectObject.map(project => <ProjectCard projectData={project} />)}
  </div>
);

export default Projects;
