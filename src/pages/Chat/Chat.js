import { projectsData } from "../../data/projectsData";
import "./Chat.css";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import SingleProject from "../../components/Projects/SingleProject/SingleProject";
import "../../components/Projects/SingleProject/SingleProject.css";
import "../../components/Projects/Projects.css";
import { Contacts, Footer } from "../../components";

function Chat() {
  const { theme } = useContext(ThemeContext);

  const project = projectsData[1];
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
            Chat App
          </h1>
          <p className="project-paragraph">
            Chat app is a simple but powerful chat application that everybody
            can use to communicate using text messages. It's like a Discord
            server or a Slack room . To enter the chat and interact with people,
            the user must log in using his Google account. Once logged in, the
            user can read the previous messages from the chat and start chatting
            by sending messages.
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
                <td>Firebase</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Context-Api</td>
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
            </tbody>
          </table>
        </div>
        <img src={project.image1} className="project-img" alt="" />
        <div className="project-textcontent">
          <h1 className="project-heading" style={{ fontSize: "30px" }}>
            Project Purpose and Goal
          </h1>
          <p className="project-paragraph">
            The main purpose of this project was to create a chat system that
            allows users to start a chat in groups . Design a global store to
            manage the states . All messages are stored in a Firestore database
            and are sync in real-time with our React application.
          </p>
        </div>
        <div className="project-webstack">
          <div className="project-leftcontent">
            <h4>React</h4>
            <h4>Firebase</h4>
            <h4>Context-Api</h4>
            <h4>Material-UI</h4>
            <h4>Netlify</h4>
          </div>
          <div className="project-rightcontent">
            <h1 className="peoject-heading" style={{ fontSize: "30px" }}>
              Web Stack and Explanation
            </h1>
            <p>
              React was the clear choice for this project, because of its ease
              of state management and the amount of packages available.
              Material-Ui was used for desgining the user interface and used
              Context-Api for managing the global state. Utilized Firebase as
              backend to integrate the real time chat updates and Google
              authentication.
            </p>
            <p>
              React hooks and local storage are also used throughout the project
              to maintain and persist the data. Netlify is also an obvious
              choice for deployment because of its speed and reliability.
            </p>
          </div>
        </div>
        <div className="check-div">
          <img src={project.image2} className="check-img" alt="" />
          <img src={project.image3} className="check-img" alt="" />
        </div>

        <div className="project-centertext">
          <h1 className="peoject-heading" style={{ fontSize: "30px" }}>
            Problems and Thought Process
          </h1>
          <p className="project-paragraph" style={projectCentertextStyleObj}>
            Processing the particular user's data into Firebase storage and
            listen to it when the app loads was the most complex part of this
            process, tried to make use of reusable React Components as much as
            possible.
          </p>
        </div>
        <div className="project-centertext">
          <h1
            className="project-heading"
            style={{ fontSize: "30px", width: "100%" }}
          >
            Lessons Learned
          </h1>
          <p
            className="project-paragraph"
            style={{
              maxWidth: "800px",
              marginTop: "30px",
              marginLeft: "auto",
              marginBottom: "30px",
              marginRight: "auto",
            }}
          >
            This project helped to solidify a lot my React knowledge, such as
            using hooks or updating the states. I also got a lot of great
            practice using ES6+ syntax across the entirety of the project .
            Learned how to make use of custom React Hooks, and i have got some
            more great experience with version control.
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

export default Chat;
