import { projectsData } from "../../data/projectsData";
import "./Movie.css";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import SingleProject from "../../components/Projects/SingleProject/SingleProject";
import "../../components/Projects/SingleProject/SingleProject.css";
import "../../components/Projects/Projects.css";
import { Contacts, Footer } from "../../components";

function Movie() {
  const { theme } = useContext(ThemeContext);

  const project = projectsData[2];
  const projectCentertextStyleObj = {
    maxWidth: "800px",
    marginTop: "30px",
    marginRight: "auto",
    marginBottom: "30px",
    marginLeft: "auto",
  };

  return (
    <>
      <div className="project-layout">
        <div className="project-textcontent">
          <h1 className="project-heading" style={{ fontSize: "50px" }}>
            Movies Hub
          </h1>
          <p className="project-paragraph">
            Decore is a project I built alongside Ian Trent for a class project.
            We decided to create a react web application that would help other
            developers get started with their web projects. Decore allows users
            to customize a layout setup that will generate custom html and css
            code that can be used as a starter template for any website.
          </p>
          <table className="techtable">
            <tbody>
              <tr>
                <th>Stack</th>
                <th>Code</th>
                <th>Live</th>
              </tr>
              <tr>
                <td>React</td>
                <td>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "cornflowerblue" }}
                  >
                    Repository
                  </a>
                </td>
                <td>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "cornflowerblue" }}
                  >
                    View Site
                  </a>
                </td>
              </tr>

              <tr>
                <td>Redux</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Material-UI</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Netlify</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Styled-Components</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <img src={project.image1} className="project-img" alt="" />
        <div className="project-textcontent">
          <h1 className="project-heading" style={{ fontSize: "30px" }}>
            Project Purpose and Goal
          </h1>
          <p className="project-paragraph">
            We built this project because we know how tedious and repetitive
            starting a new project from scratch can be, and we wanted to build
            something that we would also use ourselves.
            <br />
            <br />
            We had a timeframe of a little over a month to build out this
            project, and our goal was to have the application fully functioning
            by the end of that timeframe.
          </p>
        </div>
        <div className="project-webstack">
          <div className="project-leftcontent">
            <h4>React</h4>
            <h4>Redux</h4>
            <h4>Material-UI</h4>
            <h4>Styled-Components</h4>
            <h4>Netlify</h4>
          </div>
          <div className="project-rightcontent">
            <h1 className="peoject-heading" style={{ fontSize: "30px" }}>
              Web Stack and Explanation
            </h1>
            <p>
              React was the clear choice for this project, because of its ease
              of state management and the amount of packages available. We also
              utilized Netlify as a server to host Decore, because it allows
              live updates alongside github.
            </p>
            <p>
              In the future, we hope to add Redux to this project to clean up
              the states a bit, and we also are looking into a backend that can
              allow writing to files so users can download the code right to
              their computer.
            </p>
          </div>
        </div>
        <img src={project.image3} className="project-img" alt="" />
        <div className="project-centertext">
          <h1 className="peoject-heading" style={{ fontSize: "30px" }}>
            Problems and Thought Process
          </h1>
          <p className="project-paragraph" style={projectCentertextStyleObj}>
            Processing the necessary code into the editor was the most complex
            part of this process, we needed to update the object listing of the
            elements everytime a user added, removed, or reordered any element.
            This required complex state management in order to display the
            proper html and css when exporting.
          </p>
        </div>
        <img src={project.image4} className="project-img" alt="" />
        <div className="project-textcontent">
          <h1 className="project-heading" style={{ fontSize: "30px" }}>
            Lessons Learned
          </h1>
          <p className="project-paragraph">
            This project helped to solidify a lot my React knowledge, such as
            using hooks or updating the states. I also got a lot of great
            practice using ES6+ syntax across the entirety of the project. This
            was a large code base to manage across a team, and we all got some
            more great experience with version control and reviewing each others
            code.
          </p>
        </div>
      </div>
      <div className="project-footer">
        <div
          className="projects--body"
          style={{
            maxWidth: "1200px",
          }}
        >
          <h1
            className="project-heading"
            style={{ fontSize: "40px", marginTop: "40px" }}
          >
            Other Projects
          </h1>
          <div
            className="projects--bodyContainer"
            style={{ alignItems: "flex-start", marginLeft: 0 }}
          >
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
        </div>
      </div>
      <Contacts />
      <Footer />
    </>
  );
}

export default Movie;
