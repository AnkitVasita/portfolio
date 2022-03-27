import "./Education.css";

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
