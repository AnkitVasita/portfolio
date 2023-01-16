import React from "react";
import { useHistory } from "react-router-dom";
import "./sidemenu.css";

const Menu = () => {
  const history = useHistory();

  return (
    <>
      <div className="sidemenu">
        <h3 onClick={() => history.push("/")}>Home</h3>
        <h3 onClick={() => history.push("/portfolio")}>Portfolio</h3>
        <h3 onClick={() => history.push("/blog/epicreact")}>Blogs</h3>
      </div>
    </>
  );
};

export default Menu;
