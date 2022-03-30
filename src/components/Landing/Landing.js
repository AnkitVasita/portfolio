import React, { useContext } from "react";

import "./Landing.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { socialsData } from "../../data/socialsData";
import { headerData } from "../../data/headerData";

import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { makeStyles } from "@material-ui/core/styles";

function Landing() {
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
    <>
      <div className="landing">
        <div>
          <div className="social">
            <div className="landing-border"></div>
            {socialsData.twitter && (
              <a href={socialsData.twitter} target="_blank" rel="noreferrer">
                <FaLinkedin
                  className="landing-social"
                  style={{ color: theme.tertiary }}
                  aria-label="LinkedIn"
                />
              </a>
            )}
            {socialsData.github && (
              <a href={socialsData.github} target="_blank" rel="noreferrer">
                <FaGithub
                  className="landing-social"
                  style={{ color: theme.tertiary }}
                  aria-label="Github"
                />
              </a>
            )}
            {socialsData.instagram && (
              <a href={socialsData.instagram} target="_blank" rel="noreferrer">
                <FaInstagram
                  className="landing-social"
                  style={{ color: theme.tertiary }}
                  aria-label="Instagram"
                />
              </a>
            )}
            {socialsData.twitter && (
              <a href={socialsData.twitter} target="_blank" rel="noreferrer">
                <FaTwitter
                  className="landing-social"
                  style={{ color: theme.tertiary }}
                  aria-label="Twitter"
                />
              </a>
            )}
          </div>
        </div>
        <div className="check">
          <h1>
            <span>
              Hi there, I’m Ankit.
              <br />
            </span>
            <span>
              Front End <span>Developer</span>
            </span>
          </h1>
          <div className="lcr-buttonContainer">
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
      </div>
    </>
  );
}

export default Landing;

//
