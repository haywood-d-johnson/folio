import React from "react";

import "./index.css";

export function ExperienceItem({ year, title, details, image }) {
    const hasImage = !!image;

    return (
        <div className="experience-item">
            {hasImage && (
                <div className="experience-item-image">
                    <img
                        src={image}
                        alt="Experienceitem"
                        width="350px"
                        height="250px"
                    />
                </div>
            )}
            <div className="experience-item-grid">
                <p className="experience-item-year">{year}</p>
                <h4 className="experience-item-title">{title}</h4>
                <p className="experience-item-details">{details}</p>
            </div>
        </div>
    );
}
