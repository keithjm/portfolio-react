import React from "react";
import ProjectCard from "./ProjectCard";
import "../css/projects.css";
import { Row } from "react-bootstrap";

const Projects = props => (
  <div className="projects">
    {bootStrapRow(props)}
    {/* {props.projectObject.map(project => <ProjectCard projectData={project} />)} */}
  </div>
);

let bootStrapRow = item => {
  let x = 0;
  let rows = [];
  let columns = [];

  item.projectObject.map(project => {
    if (x === 0) {
      columns.push(<ProjectCard projectData={project} />);
      x++;
    } else if (x === 3) {
      columns.push(<ProjectCard projectData={project} />);
      rows.push(<Row> {columns} </Row>);
      x = 0;
      columns = [];
    } else {
      columns.push(<ProjectCard projectData={project} />);
      x++;
    }
    console.log(x);
  });
  if (x < 3) {
    rows.push(<Row> {columns} </Row>);
  }

  console.log(rows);
  return rows;
};

export default Projects;
