import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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
  const useStyles = makeStyles((t) => ({
    iconBtn: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 40,
      height: 40,
      borderRadius: 50,
      border: `2px solid ${theme.tertiary}`,
      color: theme.tertiary,
      transition: "all 0.2s",
      "&:hover": {
        backgroundColor: theme.secondary,
        color: theme.primary,
        transform: "scale(1.1)",
        border: `2px solid ${theme.secondary}`,
      },
    },
    icon: {
      fontSize: "1.1rem",
      transition: "all 0.2s",
      "&:hover": {},
    },
  }));

  const classes = useStyles();

  return (
    <>
      {/* <div key={id} className="singleProject"></div> */}
      <div className="projectContent">
        <img src={image} alt="" style={{ opacity: 0.8 }} />
        <h1 style={{ color: "#e0d9d9" }}>{name}</h1>
        {/* <p>Stack</p> */}
        <p>{desc}</p>
        <p>{tags}</p>{" "}
        <Link to={link}>
          <p style={{ color: "#e0d9d9" }}>View Project {">"} </p>
        </Link>
        <div className="border"></div>
      </div>
    </>
  );
}

export default SingleProject;
