import React from "react";

import "./index.css";

export function ExperienceItem({ type, year, title, details }) {
    return (
        <div className="experience-item">
            <p className="experience-item-year">{year}</p>
            <h4 className="experience-item-title">{title}</h4>
            <p className="experience-item-details">{details}</p>
        </div>
    );
}
