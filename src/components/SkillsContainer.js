import React from "react";

function SkillsContainer() {
  return (
    <div className="skill-set">
      <div className="set-1">
        <Skills
          skillName="HTML + CSS"
          style={{ backgroundColor: "lightblue", marginLeft: "30px" }}
        />
        <Skills skillName="JavaScript" style={{ backgroundColor: "pink" }} />
      </div>

      <div className="set-2">
        <Skills
          skillName="React JS"
          style={{ backgroundColor: "yellow", marginLeft: "30px" }}
        />
        <Skills
          skillName="Git and GitHub"
          style={{ backgroundColor: "lightgreen" }}
        />
      </div>
      <div className="set-3">
        <Skills
          skillName="Bootstrap"
          style={{ backgroundColor: "aqua", marginLeft: "30px" }}
        />
        <Skills skillName="Team Work" style={{ backgroundColor: "lavender" }} />
      </div>
    </div>
  );
}

function Skills(props) {
  return (
    <div className="skill-wrapper" style={props.style}>
      <p className="skill">
        <b>{props.skillName}</b>
      </p>
    </div>
  );
}
export default SkillsContainer;
