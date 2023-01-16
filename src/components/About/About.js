import React, { useContext } from "react";

import "./About.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { aboutData } from "../../data/aboutData";
import { headerData } from "../../data/headerData";
import { makeStyles } from "@material-ui/core/styles";

function About() {
  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles((t) => ({
    resumeBtn: {
      color: theme.tertiary,
      backgroundColor: "rgb(23, 28, 40)",
      borderRadius: "30px",
      textTransform: "inherit",
      textDecoration: "none",
      width: "150px",
      fontSize: "1rem",
      fontWeight: "500",
      height: "50px",
      fontFamily: "var(--primaryFont)",
      border: `3px solid ${theme.tertiary}`,
      transition: "100ms ease-out",
      animation: "1s ease 0.2s 1 normal forwards running check",
      "&:hover": {
        backgroundColor: "rgba(204, 196, 196, 0.1)",
        color: theme.tertiary,
        border: `3px solid ${theme.tertiary}`,
        cursor: "pointer",
      },
      [t.breakpoints.down("sm")]: {
        width: "180px",
      },
    },
  }));

  const classes = useStyles();

  return (
    <div
      className="about"
      id="about"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="about-body">
        <div className="about-body1">
          <h1>About Me</h1>
          <div className="button-container">
            {headerData.resume && (
              <a
                href={headerData.resume}
                download="resume"
                target="_blank"
                rel="noreferrer"
              >
                <button className={classes.resumeBtn}>Download CV</button>
              </a>
            )}
          </div>
        </div>

        <div className="check">
          <div className="about-description">
            <p style={{ color: theme.tertiary }}>{aboutData.description1}</p>
          </div>
          <div className="about-description">
            <p style={{ color: theme.tertiary }}>
              {aboutData.description3}
              <br />
              <br />
              {aboutData.description4}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
