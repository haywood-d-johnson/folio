import React from "react";

import "./index.css";

export function ExperienceItem({ type, year, title, details, image }) {
    const hasImage = !!image;

    return (
        <div className={`experience-item ${hasImage ? 'experience-item-with-image' : ''}`}>
            <p className="experience-item-year">{year}</p>
            <h4 className="experience-item-title">{title}</h4>
            <p className="experience-item-details">{details}</p>
            {hasImage && (
                <div className="experience-item-image">
                    <img src={image} alt="Experience item image" />
                </div>
            )}
        </div>
    );
}
