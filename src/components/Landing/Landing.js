import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { NavHashLink as NavLink } from "react-router-hash-link";
import { makeStyles } from "@material-ui/core/styles";

import "./Landing.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { headerData } from "../../data/headerData";
import { socialsData } from "../../data/socialsData";

import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function Landing() {
  const { theme, drawerOpen } = useContext(ThemeContext);

  const useStyles = makeStyles((t) => ({
    resumeBtn: {
      color: theme.tertiary,
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
      "&:hover": {
        backgroundColor: "#ebe9ec0d",
        color: theme.tertiary,
        border: `3px solid ${theme.tertiary}`,
      },
      [t.breakpoints.down("sm")]: {
        width: "180px",
      },
    },
    contactBtn: {
      // backgroundColor: theme.primary,
      color: theme.tertiary,
      borderRadius: "30px",
      textTransform: "inherit",
      textDecoration: "none",
      width: "150px",
      height: "50px",
      fontSize: "1rem",
      fontWeight: "500",
      fontFamily: "var(--primaryFont)",
      border: `3px solid ${theme.tertiary}`,
      transition: "100ms ease-out",
      "&:hover": {
        backgroundColor: "#ebe9ec0d",
        color: theme.tertiary,
        border: `3px solid ${theme.tertiary}`,
      },
      [t.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  }));

  const classes = useStyles();

  return (
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
      <h1>
        <span>
          Hi there, I’m Ankit.
          <br />
        </span>
        <span>
          Front End <span>Developer</span>
        </span>
      </h1>
      {/* <div>
        {headerData.resumePdf && (
          <a
            href={headerData.resumePdf}
            download="resume"
            target="_blank"
            rel="noreferrer"
          >
            <Button className={classes.resumeBtn}>Download CV</Button>
          </a>
        )}
        <NavLink to="/#contacts" smooth={true} spy="true" duration={2000}>
          <Button className={classes.contactBtn}>Contact</Button>
        </NavLink>
      </div> */}
    </div>
  );
}

export default Landing;

//
