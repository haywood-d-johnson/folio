import React from "react";

import "./index.css";

export function WorkExperienceItem({ syear, eyear, title, details }) {
    return (
        <div className="work-experience-item">
            <p className="work-experience-item-start-year">{syear}</p>
            <p className="work-experience-item-end-year">{eyear}</p>
            <h4 className="work-experience-item-title">{title}</h4>
            <p className="work-experience-item-details">{details}</p>
        </div>
    );
}
