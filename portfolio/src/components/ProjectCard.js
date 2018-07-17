import React from "react";
import "../css/projectcard.css";
import { Button, ButtonToolbar, Col } from "react-bootstrap";
import projectPlaceholder from "../assets/code-placeholder.png";
const ProjectCard = props => (
  <Col xs={12} md={3} lg={3}>
    <div className="card ">
      {props.projectData.projectLogo ? (
        <div id="logo">
          <img
            src={props.projectData.projectLogo}
            alt={props.projectData.projectName + " logo"}
          />
        </div>
      ) : (
        <img
          src={projectPlaceholder}
          alt={props.projectData.projectName + " placeholder"}
        />
      )}

      <div className="card-info">
        <h4>
          <b>{props.projectData.projectName}</b>
        </h4>
        <p>{props.projectData.projectDesc}</p>
        {props.projectData.technologies ? (
          <div>
            <p>Technologies/Services Used</p>

            <ul>
              {props.projectData.technologies.map(technology => (
                <li> {technology}</li>
              ))}
            </ul>
          </div>
        ) : (
          ""
        )}

        <ButtonToolbar>
          {props.projectData.projectLink ? (
            <Button
              onClick={() =>
                window.open(props.projectData.projectLink, "_blank")
              }
              bsStyle="project-site"
            >
              Project Page
            </Button>
          ) : (
            ""
          )}
          {props.projectData.projectGithub ? (
            <Button
              bsStyle="github"
              onClick={() =>
                window.open(props.projectData.projectGithub, "_blank")
              }
            >
              Project Github
            </Button>
          ) : (
            ""
          )}
        </ButtonToolbar>
      </div>
    </div>
  </Col>
);

export default ProjectCard;
