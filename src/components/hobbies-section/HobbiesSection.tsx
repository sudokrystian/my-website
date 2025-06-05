import {
  FaGamepad,
  FaHiking,
  FaBookOpen,
  FaCode,
  FaPlane,
  FaMusic,
} from "react-icons/fa";
import { TbGoGame } from "react-icons/tb";
import { MdPsychology } from "react-icons/md";
import "./hobbies-section.scss";
import { useState } from "react";

const hobbies = [
  {
    icon: <FaMusic />,
    label: "Music",
    caption: "Ukulele addict",
    hoverColor: "#254873",
  },
  {
    icon: <FaGamepad />,
    label: "Gaming",
    caption: "RPG and Strategy",
    hoverColor: "#37588d",
  },
  {
    icon: <FaHiking />,
    label: "Hiking",
    caption: "The higher, the better",
    hoverColor: "#4c658d",
  },
  {
    icon: <FaBookOpen />,
    label: "Reading",
    caption: "Fantasy Escapism",
    hoverColor: "#607ca5",
  },
  {
    icon: <FaCode />,
    label: "Coding",
    caption: "Side projects forever",
    hoverColor: "#7994b2",
  },
  {
    icon: <FaPlane />,
    label: "Travel",
    caption: "World nomad",
    hoverColor: "#b5bfd6",
  },
  {
    icon: <MdPsychology />,
    label: "Consciousness",
    caption: "Philosophy and Psychology",
    hoverColor: "#2d5277",
  },
  {
    icon: <TbGoGame />,
    label: "Nerd",
    caption: "D&D and board games",
    hoverColor: "#2d4d64   ",
  },
];

export default function HobbiesSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="hobbies-grid">
      {hobbies.map(({ icon, label, caption, hoverColor }, idx) => (
        <div
          className="hobby-card"
          key={label}
          tabIndex={0}
          onMouseEnter={() => setHovered(idx)}
          onMouseLeave={() => setHovered(null)}
          style={
            hovered === idx
              ? { background: hoverColor, color: "#23272f" }
              : undefined
          }
        >
          <div className="hobby-icon">{icon}</div>
          <div className="hobby-label">{label}</div>
          <div className="hobby-caption">{caption}</div>
        </div>
      ))}
    </div>
  );
}
