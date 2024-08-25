import React from "react";

import { convertToCommaSeparatedList } from "../../SkillsComponent/SkillsColumnComponent";

import "./index.css";

export function ProjectImage({ imageUrl, alt }) {
    return (
        <div className="project-image-container">
            <img src={imageUrl} alt={alt} />
        </div>
    );
}

export function ProjectDetails({ title, description, techStack }) {
    const stackList = convertToCommaSeparatedList(techStack);

    return (
        <div className="project-details">
            <h3>{title}</h3>
            <p>{description}</p>
            <h3>Technologies Stack:</h3>
            <p>{stackList}</p>
        </div>
    );
}
