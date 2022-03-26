import React from "react";
import "./SingleProject.css";
import { Link } from "react-router-dom";

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
  return (
    <>
      <div className="projectContent">
        <img src={image} alt="" style={{ opacity: 0.8 }} />
        <h1 style={{ color: "#e0d9d9" }}>{name}</h1>
        <p>{desc}</p>
        <p>{tags}</p>{" "}
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
