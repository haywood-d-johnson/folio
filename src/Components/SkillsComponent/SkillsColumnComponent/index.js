import React from "react";

import "./index.css";

function SkillsColumn({ title, skills }) {
    return (
        <div className="skills-column">
            <h3>{title}</h3>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
}

export default SkillsColumn;
