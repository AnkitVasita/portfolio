import { useContext } from "react";
import "./Education.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import eduImgWhite from "../../assets/svg/education/eduImgWhite.svg";
import expImgWhite from "../../assets/svg/experience/expImgWhite.svg";

function Education() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="edu-section">
      <div className="edu-edu">
        <div className="my-education">
          <h1>Work Experience</h1>
          <div className="edu-icon">
            <img src={expImgWhite} alt="" />
            <h3>Mobile Programming Pvt. Ltd. , Gurgaon</h3>
          </div>
          <p>Sofware Developer</p>
          <p>May 2022 - Present</p>
        </div>
        <div className="my-education">
          <div className="edu-icon">
            <img src={expImgWhite} alt="" />
            <h3>Nixonbit , Banglore</h3>
          </div>
          <p>Front End Developer</p>
          <p>July 2021 - March 2022</p>
        </div>
        <div className="my-education">
          <div className="edu-icon">
            <img src={expImgWhite} alt="" />
            <h3>SpazioX pvt ltd , Pune</h3>
          </div>
          <p>Front End Developer</p>
          <p>Feb 2021 - July 2021</p>
        </div>
        <div className="my-education">
          <h1>Internship</h1>
          <div className="edu-icon">
            <img src={expImgWhite} alt="" />
            <h3>Snowwhiteminerals pvt ltd , Ajmer</h3>
          </div>
          <p>Intern</p>
          <p> Jan 2019 - March 2020 </p>
        </div>
        <div className="my-education">
          <h1>Education</h1>
          <div className="edu-icon">
            {" "}
            <img src={eduImgWhite} alt="" />
            <h3>Arya Institute of Engineering and Technolgy, Jaipur(Raj)</h3>
          </div>

          <p>Bachelor of Technology in Computer Science</p>
          <p>2014 - 2018</p>
        </div>
      </div>
      <div className="edu-img">
        <img src={theme.eduimg} alt="" />
      </div>
    </div>
  );
}

export default Education;
