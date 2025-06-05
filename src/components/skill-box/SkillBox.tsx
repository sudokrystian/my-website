import React from "react";
import { IconType } from "react-icons"; 
import "./skill-box.scss";

type SkillBoxProps = {
  icon: IconType;
  text: string;
  color?: string; // Optional for per-skill bg, fallback in CSS
};

const SkillBox: React.FC<SkillBoxProps> = ({ icon: Icon, text, color }) => (
  
  <div
    className="skillbox"
    style={color ? { background: color } : undefined}
    tabIndex={0}
  >
    <Icon className="icon" />
    <span>{text}</span>
  </div>
);

export default SkillBox;