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
            Movies hub is a project that i built with the help of React and
            Redux. Movies hub allows users to stream and search latest and
            trending movies that are running in the market. Users can see full
            description about movies before jumpling on it .
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
            I used React-Router heavily because this application requires a lot
            of routing between pages and React-Router is very flexible and
            efficient with react. Utilized TMDB's Api to fetch the movies for
            different genres . Fetching dynamic Api's from TMDB's server was
            another task to manage.
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
              React made the most sense for the web application because when it
              comes to building user interfaces and reusable components React is
              perfect choice for it . Used Redux middleware for handling
              asynchronus apl calls. React-Router made it very easy and
              understandable for routing between pages.
            </p>
            <p>
              Styled-components was used because the structure of CSS-in-js is
              much clearer and prevents overrides. In the future, i'm thinking
              of adding more features to this application like user
              authentication. Used Netlify to host this application.
            </p>
          </div>
        </div>
        <img src={project.image3} className="project-img" alt="" />
        <div className="project-centertext">
          <h1 className="peoject-heading" style={{ fontSize: "30px" }}>
            Problems and Thought Process
          </h1>
          <p className="project-paragraph" style={projectCentertextStyleObj}>
            Manage the movies data inside a single global store and pull out the
            necessory details into components was a bit complex part. Add
            pagination to the app so had to make use of dynamic api calls
            according to it. .
          </p>
        </div>
        <img src={project.image4} className="project-img" alt="" />
        <div className="project-textcontent">
          <h1 className="project-heading" style={{ fontSize: "30px" }}>
            Lessons Learned
          </h1>
          <p className="project-paragraph">
            Learned how to make asynchronus api call using Redux Async Thunk.
            React hooks was key part of this application because it makes it
            very easy to manage the state.
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
