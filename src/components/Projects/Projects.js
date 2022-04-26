import React, { useContext } from "react";

import { ThemeContext } from "../../contexts/ThemeContext";
import { projectsData } from "../../data/projectsData";

import "./Projects.css";
import SingleProject from "./SingleProject/SingleProject";

function Projects() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      {projectsData.length > 0 && (
        <div
          className="projects"
          id="projects"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="projects--header">
            <h1 style={{ color: theme.tertiary }}>
              What I've been working on <br />
            </h1>
            <p>
              I like to stay busy and always have a project in the works. Take a
              look at some of the applications that I've dedicated my time to.
            </p>
          </div>
          <div className="projects--body">
            <div className="projects--bodyContainer">
              {projectsData.slice(0, 2).map((project) => (
                <SingleProject
                  theme={theme}
                  key={project.id}
                  id={project.id}
                  name={project.projectName}
                  desc={project.projectDesc}
                  tags={project.tags}
                  code={project.code}
                  demo={project.demo}
                  image={project.image1}
                  link={project.link}
                />
              ))}
            </div>

            <div className="projects--bodyContainer">
              {projectsData.slice(2, 4).map((project) => (
                <SingleProject
                  theme={theme}
                  key={project.id}
                  id={project.id}
                  name={project.projectName}
                  desc={project.projectDesc}
                  tags={project.tags}
                  code={project.code}
                  demo={project.demo}
                  image={project.image1}
                  link={project.link}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;
