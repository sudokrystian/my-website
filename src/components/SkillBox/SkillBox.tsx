import React from "react";
import "./SkillBox.scss";

const SkillBox = (props: { boxText: string }) => {
  return (
    <div className="skillbox">
      <p className="skillbox-text">{props.boxText}</p>
    </div>
  );
};

export default SkillBox;
