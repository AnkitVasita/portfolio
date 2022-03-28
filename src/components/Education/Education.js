import React, { useContext } from "react";

import { ThemeContext } from "../../contexts/ThemeContext";

import "./Education.css";
// import EducationCard from "./EducationCard";

// import { educationData } from "../../data/educationData";
import AddSkill from "./AddSkill";
import { FaHtml5, FaReact, FaGithub, FaInstagram } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import {
  SiTailwindcss,
  SiStyledcomponents,
  SiFirebase,
  SiRedux,
  SiNextdotjs,
} from "react-icons/si";

function Education() {
  const { theme } = useContext(ThemeContext);
  const skills = [
    "Javascript",
    "React",
    "HTML & CSS",
    "TailwindCss",
    "Redux",
    "NextJS",
    "Github",
    "Redux",
    "Firebase",
    "Styled-Components",
  ];

  return (
    <div
      className="education"
      id="resume"
      style={{ backgroundColor: theme.secondary }}
    >
      <div style={{ color: theme.tertiary }} className="education-description">
        <h1>My Skills</h1>

        <p>
          Through my studies, I've gained a solid understanding of computer
          science and web development concepts, and have dedicated a lot of my
          free time to apply these concepts to real-world scenarios and
          applications.
        </p>
        <div className="education_skill">
          <div className="check">
            <div className="skill">
              {skills.slice(0, 2).map((skillName) => (
                <p>
                  <span>○</span> {skillName}
                </p>
              ))}
            </div>
            <div className="skill">
              {skills.slice(2, 4).map((skillName) => (
                <p>
                  <span>○</span> {skillName}
                </p>
              ))}
            </div>
            <div className="skill">
              {skills.slice(4, 6).map((skillName) => (
                <p>
                  <span>○</span> {skillName}
                </p>
              ))}
            </div>
          </div>
          <div className="check">
            <div className="skill">
              {skills.slice(6, 8).map((skillName) => (
                <p>
                  <span>○</span> {skillName}
                </p>
              ))}
            </div>
            <div className="skill">
              {skills.slice(8, 10).map((skillName) => (
                <p>
                  <span>○</span> {skillName}
                </p>
              ))}
            </div>
          </div>

          {/* <div className="skill">
            {skills.slice(5, 10).map((skillName) => (
              <p>
                <span>○</span> {skillName}
              </p>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Education;

//         <div>
//            {skills.slice(0, 2).map((skill, index) => {
//             return <AddSkill key={index} skillName={skill} />;
//           })}
//         </div>
//         <div>
//           {skills.slice(2, 4).map((skill, index) => {
//             return <AddSkill key={index} skillName={skill} />;
//           })}
//         </div>
//         <div>
//           {skills.slice(4, 6).map((skill, index) => {
//             return <AddSkill key={index} skillName={skill} />;
//           })}
//         </div>
//         <div>
//           {skills.slice(6, 8).map((skill, index) => {
//             return <AddSkill key={index} skillName={skill} />;
//           })}
//         </div>
