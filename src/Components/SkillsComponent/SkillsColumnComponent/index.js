import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";

function SkillsColumn({ title, skills, description, toolsList, icon }) {
    const commaSeparatedSkills = convertToCommaSeparatedList(skills);

    return (
        <div className="skills-column">
            <FontAwesomeIcon icon={icon} className="fa-icon" size="2x" />
            <h2>{title}</h2>
            <p className="skills-column-description">{description}</p>
            <h3>Languages:</h3>
            <p className="skill-list">{commaSeparatedSkills}</p>
            <h3>My Tools:</h3>
            <ul className="skills-toolList">
                {toolsList.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
}

export function convertToCommaSeparatedList(items) {
    if (items.length === 2) {
        return items.join(" and ");
    } else {
        return items
            .map((item, index) => {
                if (index === items.length - 1) {
                    return item;
                } else {
                    return `${item}, `;
                }
            })
            .join("");
    }
}

export default SkillsColumn;
