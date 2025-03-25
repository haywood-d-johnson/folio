import React from "react";

import { convertToCommaSeparatedList } from "../../SkillsComponent/SkillsColumnComponent";

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
    const stackList = convertToCommaSeparatedList(techStack);

    return (
        <div className="project-details">
            <div className="project-title_container">
                <FontAwesomeIcon icon={titleIcon} />
                <h3>{title}</h3>
                <FontAwesomeIcon icon={titleIcon} />
            </div>
            <div className="project-github_container">
                <FontAwesomeIcon icon={faGithub} />
                <a className="project-github_text" href={githubLink}>
                    GitHub Repo
                </a>
            </div>
            <p>{description}</p>
            <h3>Technologies Stack:</h3>
            <p>{stackList}</p>
        </div>
    );
}
