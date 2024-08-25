import React from "react";

import "./index.css";

export function ProjectImage({ imageUrl, alt }) {
    return (
        <div className="project-image-container">
            <img src={imageUrl} alt={alt} />
        </div>
    );
}

export function ProjectDetails({ title, description }) {
    return (
        <div className="project-details">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}
