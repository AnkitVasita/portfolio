import { projectsData } from "../../data/projectsData";
import "./Amazon.css";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import SingleProject from "../../components/Projects/SingleProject/SingleProject";
import "../../components/Projects/SingleProject/SingleProject.css";
import "../../components/Projects/Projects.css";
import { Contacts, Footer } from "../../components";

function Amazon() {
  const { theme } = useContext(ThemeContext);

  const project = projectsData[0];
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
            Z-Shop
          </h1>
          <p className="project-paragraph">
            Z-shop is an E-commerce web application that i built from scratch
            with Next Js. Z-shop allows users to shop online products and can
            add items their to basket.This e-commerce application required a lot
            of heavy lifting to create a universal cart and overall shopping
            experience as well as introduce the product and include support
            pages.
            {/* Users must have logged in for
            checkout and then they can use their card details for the payment process. Users can also see 
            their orders as well. */}
          </p>
          <table className="techtable">
            <tbody>
              <tr>
                <th>Stack</th>
                <th>Code</th>
                <th>Live</th>
              </tr>
              <tr>
                <td>Next Js</td>
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
                    style={{ color: "cornflowerblue" }}
                    target="_blank"
                    rel="noreferrer"
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
                <td>Firebase</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>TailwindCss</td>
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
            This project included 3 phases of the site. Phase 1 was to build a
            fully fucntioning e-commerce web application that allows users to
            have all the necessory features like login , checkout , add/remove
            items from basket etc. Phase 2 was to put the data into global store
            so that every component of the application can have access. Phase 3
            was the most largest and complex part, as it includes payment
            functionality that allows users to make secure payments.
            <br />
            <br />
            Design and develope a fully functioning e-commerce application is in
            itself a big task that i wanted to manage on my own and also gave
            myself a particular timeframe to see if i can manage all these
            things on time.
          </p>
        </div>
        <div className="project-webstack">
          <div className="project-leftcontent">
            <h4>Next Js</h4>
            <h4>Redux</h4>
            <h4>Stripe</h4>
            <h4>Firebase</h4>
            <h4>TailwindCss</h4>
            <h4>Netlify</h4>
          </div>
          <div className="project-rightcontent">
            <h1 className="peoject-heading" style={{ fontSize: "30px" }}>
              Web Stack and Explanation
            </h1>
            <p>
              Next Js was one of the reason for this project because of its file
              based routing. Utilized Redux for managing the state of the
              application and Firebase as backend to store the data. Integrate
              Stripe for the secure checkout process. Tailwind Css was used for
              building the user interface.
            </p>
            <p>
              Utilized Netlify as a server to host Z-shop, because it allows
              live updates alongside github. In the future, I am thinking of add
              new features to the app as well.
            </p>
          </div>
        </div>
        <img src={project.image2} className="project-img" alt="" />
        <div className="project-centertext">
          <h1 className="peoject-heading" style={{ fontSize: "30px" }}>
            Problems and Thought Process
          </h1>
          <p className="project-paragraph" style={projectCentertextStyleObj}>
            Like most projects, I ran into a few bumps along the way, one
            particularly difficult area was organization and structure of the
            code. Because of this project's size, I realized how important
            maintaining an organized structure would be. I worked hard to keep
            components as reusable as possible and utilized props for many
            slight variations.
          </p>
        </div>
        <img src={project.image4} className="project-img" alt="" />
        <div className="project-textcontent">
          <h1 className="project-heading" style={{ fontSize: "30px" }}>
            Lessons Learned
          </h1>
          <p className="project-paragraph">
            I could spend all day describing the lessons that I learned while
            working on this project, but the most important ones involved my
            newfound understanding of React Hooks, Git management, Feature Keys,
            and API integration. As my first large project using React, I
            learned a lot of lessons regarding code structure and organization.
            When I first began, I would write sloppy code and move on, but now I
            know how doing so can come back to bite you; I now spend a lot more
            time refactoring and improving every line I code I write, for the
            best readability and far fewer headaches.
          </p>
        </div>
      </div>
      <div className="project-footer">
        <div
          className="projects--body"
          style={{
            maxWidth: "1200px",
            // paddingLeft: "1.25rem",
            // paddingRight: "1.25rem",
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
      <Contacts />
      <Footer />
    </>
  );
}

export default Amazon;
