import "./Education.css";
import file from "../../assets/svg/skills/nextJS.svg";

function AddSkill({ skillName }) {
  return (
    <div className="skill">
      <p>
        <span>○</span> {skillName}
      </p>
    </div>
  );
}

export default AddSkill;
