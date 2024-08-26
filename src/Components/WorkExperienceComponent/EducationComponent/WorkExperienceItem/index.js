import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

export function WorkExperienceItem({ syear, eyear, title, details }) {
    return (
        <div className="work-experience-item">
            <p className="work-experience-item-start-year">
                {" "}
                <FontAwesomeIcon icon={faSun} className="start-end-icon" />
                {syear}
            </p>
            <p className="work-experience-item-end-year">
                <FontAwesomeIcon icon={faMoon} className="start-end-icon" />
                {eyear}
            </p>
            <h4 className="work-experience-item-title">{title}</h4>
            <p className="work-experience-item-details">{details}</p>
        </div>
    );
}
