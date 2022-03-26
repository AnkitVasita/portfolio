import React, { useContext, useState } from "react";
// import { Snackbar, IconButton, SnackbarContent } from "@material-ui/core";
// import CloseIcon from "@material-ui/icons/Close";
// import axios from "axios";
// import isEmail from "validator/lib/isEmail";
// import { makeStyles } from "@material-ui/core/styles";
// import {
//   FaTwitter,
//   FaLinkedinIn,
//   FaGithub,
//   FaYoutube,
//   FaBloggerB,
//   FaRedditAlien,
//   FaStackOverflow,
//   FaCodepen,
//   FaInstagram,
//   FaGitlab,
//   FaMediumM,
// } from "react-icons/fa";
// import { AiOutlineSend, AiOutlineCheckCircle } from "react-icons/ai";
// import { FiPhone, FiAtSign } from "react-icons/fi";
// import { HiOutlineLocationMarker } from "react-icons/hi";

// import { socialsData } from "../../data/socialsData";
// import { contactsData } from "../../data/contactsData";
import "./Contacts.css";
import { ThemeContext } from "../../contexts/ThemeContext";

function Contacts() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className="contacts"
      id="contacts"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="contacts--container">
        <h1 style={{ color: theme.tertiary }}>
          Let's Build Something Together
        </h1>
        <p>
          Feel free to reach out if you're looking for a developer, have a
          question, or just want to connect.
        </p>
      </div>
      <p>vasitaankit97@gmail.com</p>
      <img src={theme.contactsimg} alt="contacts" className="contacts--img" />
    </div>
  );
}

export default Contacts;
