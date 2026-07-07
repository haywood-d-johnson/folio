import React from "react";

import "./index.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function ProjectDetails({
    title,
    titleIcon,
    githubLink,
    description,
    techStack,
}) {
    return (
        <div className="project-details">
            <div className="project-title_container">
                <FontAwesomeIcon icon={titleIcon} />
                <h3>{title}</h3>
                <FontAwesomeIcon icon={titleIcon} />
            </div>
            <div className="project-github_container">
                <FontAwesomeIcon icon={faGithub} />
                <a
                    className="project-github_text"
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub Repo
                </a>
            </div>
            <p>{description}</p>
            <h3>Tech Stack</h3>
            <div className="chip-row project-stack">
                {techStack.map((tech, index) => (
                    <span className="chip" key={index}>
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}
