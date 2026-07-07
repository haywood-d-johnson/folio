import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

export function WorkExperienceItem({ syear, eyear, title, details, summary }) {
    const [flipped, setFlipped] = useState(false);

    const toggle = () => setFlipped((f) => !f);
    const onKeyDown = (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
        }
    };

    return (
        <div
            className={`we-flip ${flipped ? "flipped" : ""}`}
            onClick={toggle}
            onKeyDown={onKeyDown}
            role="button"
            tabIndex={0}
            aria-pressed={flipped}
            aria-label={`${title} at ${details}. Activate to ${
                flipped ? "hide" : "show"
            } the summary.`}
        >
            <div className="we-flip-inner">
                <div className="we-face we-front">
                    <p className="work-experience-item-start-year">
                        <FontAwesomeIcon icon={faSun} className="start-end-icon" />
                        {syear}
                    </p>
                    <p className="work-experience-item-end-year">
                        <FontAwesomeIcon icon={faMoon} className="start-end-icon" />
                        {eyear}
                    </p>
                    <h4 className="work-experience-item-title">{title}</h4>
                    <p className="work-experience-item-details">{details}</p>
                    <FontAwesomeIcon
                        icon={faArrowsRotate}
                        className="we-flip-hint"
                        aria-hidden="true"
                    />
                </div>
                <div className="we-face we-back">
                    <p className="we-back-summary">{summary}</p>
                    <FontAwesomeIcon
                        icon={faArrowsRotate}
                        className="we-flip-hint"
                        aria-hidden="true"
                    />
                </div>
            </div>
        </div>
    );
}
