import { projectsData } from "../../data/projectsData";
import "./Covid.css";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import SingleProject from "../../components/Projects/SingleProject/SingleProject";
import "../../components/Projects/SingleProject/SingleProject.css";
import "../../components/Projects/Projects.css";
import { Contacts, Footer } from "../../components";

function Covid() {
  const { theme } = useContext(ThemeContext);

  const project = projectsData[3];

  return (
    <>
      <div className="project-layout">
        <div className="project-textcontent">
          <h1 className="project-heading" style={{ fontSize: "44px" }}>
            React-Admin
          </h1>
          <p className="project-paragraph">
            React Admin is simply an admin dashboard that i built with React.
            This application allows admin to create new users to the dashboard
            and manage all the data inside of it. Admin must have to log in with
            Email and Password in order to make changes.
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
                    style={{ color: "cornflowerblue" }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Repository
                  </a>
                </td>
                <td>
                  <a
                    href={project.demo}
                    style={{ color: "cornflowerblue" }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Site
                  </a>
                </td>
              </tr>
              <tr>
                <td>Firebase</td>
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
            Main purpose of this application was to have CRUD functoinality to
            it with the help of Firebase V9. Adding dark mode to the application
            was another challange. As currently i'm working on this projects i
            am trying to add new features like providing access to new users.
          </p>
        </div>
        <div className="project-webstack">
          <div className="project-leftcontent">
            <h4>React</h4>
            <h4>Firebase</h4>
          </div>
          <div className="project-rightcontent">
            <h1 className="peoject-heading" style={{ fontSize: "30px" }}>
              Web Stack and Explanation
            </h1>
            <p>
              React is used for this project beacause React is pretty much fast
              at building User Interfaces and Components. Firebase V9 was used
              for CRUD functionality.
            </p>
          </div>
        </div>
        <img src={project.image2} className="project-img" alt="" />
        {/* <div className="project-centertext">
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
        </div> */}
        <img src={project.image} className="project-img" alt="" />
        <div className="project-textcontent">
          <h1 className="project-heading" style={{ fontSize: "30px" }}>
            Future Improvements
          </h1>
          <p className="project-paragraph">
            As of now i'm using React and Firebase for this application but in
            the future I am thinking of adding some changes to the stack of this
            application . As I'm excited to explore and learn MERN stack so i
            will bring up changes according to it.
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

export default Covid;
