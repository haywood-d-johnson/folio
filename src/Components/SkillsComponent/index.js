import React from "react";
import SkillsColumn from "./SkillsColumnComponent";

import {
    faCode,
    faEye,
    faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";

import "./index.css";

function SkillsContainer() {
    const DotNetSkills = [
        "C#",
        ".NET (Core & Framework)",
        "ASP.NET Core",
        "ASP.NET MVC",
        "Web API / REST",
        "SQL Server",
    ];
    const ReactSkills = [
        "React",
        "React Native",
        "TypeScript",
        "JavaScript",
        "Node.js",
        "Express",
        "HTML / CSS",
    ];
    const ComputerVisionSkills = [
        "Python",
        "OpenCV",
        "TensorFlow",
        "NumPy",
        "Image Processing",
    ];
    const ToolingSkills = [
        "Git",
        "Docker",
        "CI/CD",
        "AWS",
        "Azure",
        "Postman",
        "Jest",
    ];

    return (
        <div className="skills-grid-container">
            <div className="skills-container horizontal reveal-grid">
                <SkillsColumn
                    icon={faCode}
                    title=".NET Development"
                    skills={DotNetSkills}
                />
                <SkillsColumn
                    icon={faReact}
                    title="React & Frontend"
                    skills={ReactSkills}
                />
                <SkillsColumn
                    icon={faEye}
                    title="Computer Vision & ML"
                    skills={ComputerVisionSkills}
                />
                <SkillsColumn
                    icon={faScrewdriverWrench}
                    title="Core Tooling & Platforms"
                    skills={ToolingSkills}
                />
            </div>
        </div>
    );
}

export default SkillsContainer;
