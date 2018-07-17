import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./components/NavigationBar.js";
// import ProjectCard from "./components/ProjectCard";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects.js";
// import ContactPage from "./components/ContactPage";
import "./projects";
import PortFooter from "./components/PortFooter";
import projects from "./projects";
const ProjectsPage = () => {
  return <Projects projectObject={projects} />;
};

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavigationBar />
          {/* <Wrapper> */}
          <Route exact path="/" component={AboutMe} />
          <Route exact path="/about" component={AboutMe} />
          <Route exact path="/projects" component={ProjectsPage} />
          {/* <Route exact path="/contact" component={ContactPage} /> */}
          {/* </Wrapper> */}
        </div>
      </Router>
    );
  }
}

export default App;
