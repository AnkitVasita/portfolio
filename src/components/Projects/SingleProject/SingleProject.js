import React from "react";
import "./SingleProject.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function SingleProject({
  id,
  name,
  desc,
  tags,
  code,
  demo,
  image,
  theme,
  link,
}) {
  const history = useHistory();

  return (
    <>
      <div className="projectContent">
        <img src={image} onClick={() => history.push(link)} alt="z-shop" />
        <h1 style={{ color: "#e0d9d9" }}>{name}</h1>
        <p>{desc}</p>
        <div className="tags">
          {/* <p>Next JS</p>
          <p>Redux</p>
          <p>Firebase</p>
          <p>Material-Ui</p>
          <p>Netlify</p> */}
          {tags.map((t, i) => (
            <p key={i}>{t}</p>
          ))}
        </div>
        <Link to={link}>
          <p style={{ color: "#e0d9d9", paddingBottom: "2rem" }}>
            View Project {">"}{" "}
          </p>
        </Link>
        <div className="border"></div>
      </div>
    </>
  );
}

export default SingleProject;
