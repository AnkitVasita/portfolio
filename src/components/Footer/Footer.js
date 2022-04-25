import React, { useContext } from "react";
import "./Footer.css";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { ThemeContext } from "../../contexts/ThemeContext";
import { socialsData } from "../../data/socialsData";

function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="app-footer" style={{ backgroundColor: theme.secondary }}>
      {socialsData.linkedIn && (
        <a href={socialsData.linkedIn} target="_blank" rel="noreferrer">
          <FaLinkedin className="linkedin" aria-label="LinkedIn" />
        </a>
      )}
      {socialsData.github && (
        <a href={socialsData.github} target="_blank" rel="noreferrer">
          <FaGithub className="github" aria-label="Github" />
        </a>
      )}
      {socialsData.instagram && (
        <a href={socialsData.instagram} target="_blank" rel="noreferrer">
          <FaInstagram className="instagram" aria-label="Instagram" />
        </a>
      )}
      {socialsData.twitter && (
        <a href={socialsData.twitter} target="_blank" rel="noreferrer">
          <FaTwitter className="twitter" aria-label="Twitter" />
        </a>
      )}
    </div>
  );
}

export default Footer;
