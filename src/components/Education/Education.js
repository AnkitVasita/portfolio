import { useContext } from "react";
import "./Education.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import eduImgWhite from "../../assets/svg/education/eduImgWhite.svg";
import eduImgBlack from "../../assets/svg/education/eduImgBlack.svg";
import expImgWhite from "../../assets/svg/experience/expImgWhite.svg";
import expImgBlack from "../../assets/svg/experience/expImgBlack.svg";

function Education() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="edu-section">
      <div className="edu-edu">
        <div className="my-education">
          <h1>Education</h1>
          <div className="edu-icon" style={{ backgroundColor: theme.primary }}>
            {" "}
            <img
              src={theme.type === "dark" ? eduImgBlack : eduImgWhite}
              // style={{ width: "30%" }}
              alt=""
            />
            <h3>Arya Institute of Engineering and Technolgy, Jaipur(Raj)</h3>
          </div>

          <p>Bachelor of Technology in Computer Science</p>
          <p>2014 - 2018</p>
          {/* <div className="edu-border"></div> */}
        </div>
        <div className="my-education">
          <h1>Work Experience</h1>
          <div className="edu-icon">
            <img
              src={theme.type === "dark" ? expImgBlack : expImgWhite}
              alt=""
            />
            <h3>SpazioX Private Limited ,Pune</h3>
          </div>

          <p>Front End Developer</p>
          <p>oct 2019 - May 2020 </p>
          <p>
            ○ Coded websites using HTML, CSS, JavaScript and other languages.
            <br />
            ○ Conducted testing and review of website design for responsiveness,
            clarity and effectiveness.
            <br />
            ○ Performed bug fixes and code reviews. Collaborated with marketing
            department to determine organizational need and design pages to meet
            goals.
            <br />○ Applied latest emerging technology, software and project
            application trends to update and maintain site applicability.
          </p>
          {/* <div className="edu-border"></div> */}
        </div>
      </div>
      <div className="edu-img">
        <img src={theme.eduimg} alt="" />
      </div>
    </div>
  );
}

export default Education;
