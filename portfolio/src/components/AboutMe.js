import React from "react";
import { Panel } from "react-bootstrap";
import Wrapper from "./Wrapper";

const AboutMe = props => (
  <div>
    <Wrapper>
      <Panel>
        <Panel.Body>
          <p>
            I attended to the Univeristy of Alabama, where I studied Mathematics
            and Finance. I am new to the field of web development and software
            development, but I have had deep interest in it over the last few
            years. I would like to develop software combining math and finance.
          </p>
          <p>
            Over the past few years, I have tried to familiarize myself with
            common programming langueges. A few of the languagues I have
            expirmented with are C, JAVA, Python, and R. I will continue to
            learn these languages in addition to full-stack web development.
          </p>
        </Panel.Body>
      </Panel>
    </Wrapper>
  </div>
);

export default AboutMe;
