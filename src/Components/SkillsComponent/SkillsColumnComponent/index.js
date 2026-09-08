import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";

function SkillsColumn({ title, skills, learning, icon }) {
    return (
        <div className="skills-column">
            <FontAwesomeIcon icon={icon} className="fa-icon" size="2x" />
            <h2>{title}</h2>
            <div className="chip-row skill-list">
                {skills.map((skill, index) => (
                    <span className="chip" key={index}>
                        {skill}
                    </span>
                ))}
            </div>
            {learning && (
                <p className="skills-learning">
                    <span className="skills-learning-label">
                        Currently learning
                    </span>
                    {learning}
                </p>
            )}
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
