import React, { useContext } from "react";

import "./Navbar.css";
import { headerData } from "../../data/headerData";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Link, useHistory } from "react-router-dom";
// import DehazeIcon from "@mui/icons-material/Dehaze";
import DehazeIcon from "@material-ui/icons/Dehaze";
import { green } from "@material-ui/core/colors";

function Navbar() {
  const { theme } = useContext(ThemeContext);
  const history = useHistory();

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
        <h1 onClick={() => history.push("/")} style={{ color: theme.tertiary }}>
          {shortname(headerData.navTitle)}
        </h1>

        <div className="menu">
          <Link to="/">
            <h3
              style={{
                color: theme.tertiary,
                fontFamily: "Poppins",
                fontSize: "1.2rem",
              }}
            >
              {shortname("Home")}
            </h3>
          </Link>
          <Link to="/portfolio">
            <h3
              style={{
                color: theme.tertiary,
                fontFamily: "Poppins",
                fontSize: "1.2rem",
              }}
            >
              {shortname("Portfolio")}
            </h3>
          </Link>
          <Link to="/blogs">
            <h3
              style={{
                color: theme.tertiary,
                fontFamily: "Poppins",
                fontSize: "1.2rem",
              }}
            >
              {shortname("Blogs")}
            </h3>
          </Link>
        </div>
        <div>
          <DehazeIcon
            className="burger-icon"
            fontSize="large"
            style={{ color: "white", cursor: "pointer" }}
            onClick={() => history.push("/menu")}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
