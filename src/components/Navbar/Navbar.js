import React, { useContext } from "react";

import "./Navbar.css";
import { headerData } from "../../data/headerData";
import { ThemeContext } from "../../contexts/ThemeContext";

function Navbar() {
  const { theme } = useContext(ThemeContext);

  const shortname = (name) => {
    if (name.length > 12) {
      return name.split(" ")[0];
    } else {
      return name;
    }
  };

  return (
    <div className="navbar">
      <div className="navbar--container">
        <h1 style={{ color: theme.tertiary }}>
          {shortname(headerData.navTitle)}
        </h1>
      </div>
    </div>
  );
}

export default Navbar;
