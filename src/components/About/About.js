import React, { useContext } from "react";

import "./About.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { aboutData } from "../../data/aboutData";

function About() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="about"
      id="about"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="about-body">
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
