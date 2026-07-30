import React from "react";

import "./index.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export function ProjectDetails({
    title,
    titleIcon,
    githubLink,
    liveLink,
    description,
    techStack,
    status,
}) {
    return (
        <div className="project-details">
            {status && (
                <span className={`project-status project-status--${status.tone}`}>
                    {status.label}
                </span>
            )}
            <div className="project-title_container">
                <FontAwesomeIcon icon={titleIcon} />
                <h3>{title}</h3>
                <FontAwesomeIcon icon={titleIcon} />
            </div>
            <div className="project-links">
                {githubLink && (
                    <a
                        className="project-link"
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                        <span>GitHub Repo</span>
                    </a>
                )}
                {liveLink && (
                    <a
                        className="project-link"
                        href={liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        <span>Visit site</span>
                    </a>
                )}
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
