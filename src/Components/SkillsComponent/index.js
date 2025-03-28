import React from "react";
import SkillsColumn from "./SkillsColumnComponent";

import {
    faRobot,
    faCloud,
    faCode,
    faCubes,
    faDatabase,
    faCheck,
    faChartLine,
    faBrain,
} from "@fortawesome/free-solid-svg-icons";

import "./index.css";

function SkillsContainer() {
    const CloudPlatformSkills = ["Microsoft Azure", "AWS", "GCP"];
    const ProgrammingLanguageSkills = [
        "JavaScript",
        "TypeScript",
        "PHP",
        "Python",
        "Java",
        "C/C++",
        "C#",
    ];
    const FrameworksLibrariesSkills = [
        "React",
        "React Native",
        "Node.js",
        "Express.js",
        "jQuery",
        "Django",
        "Laravel",
        ".NET Core/.NET Framework",
        "Vue.js",
        "WordPress",
        "Arduino",
    ];
    const DatabaseManagementSkills = [
        "Oracle RDBMS",
        "SQL Server",
        "MySQL",
        "MSSQL",
        "MongoDB",
    ];
    const TestingAutomationSkills = [
        "Selenium",
        "JMeter",
        "Postman",
        "Jenkins",
        "VMware",
        "Mocha",
        "Chai",
        "Jest",
    ];
    const AnalyticsToolsSkills = [
        "Google Analytics",
        "Firebase Analytics",
        "Docker",
        "Git",
        "CI/CD",
        "Linux Development Environments",
        "API & Data Integration Strategies",
    ];
    const EmbeddedSystemsSkills = [
        "ARM microprocessors",
        "Real-Time Operating Systems (RTOS)",
        "ROS2",
        "Arduino",
        "Raspberry Pi",
    ];
    const MachineLearningSkills = ["TensorFlow", "OpenCV"];

    return (
        <div className="skills-grid-container">
            <div className="skills-container horizontal">
                <SkillsColumn
                    icon={faCloud}
                    title="Cloud Platforms"
                    skills={CloudPlatformSkills}
                />
                <SkillsColumn
                    icon={faCode}
                    title="Programming Languages"
                    skills={ProgrammingLanguageSkills}
                />
                <SkillsColumn
                    icon={faCubes}
                    title="Frameworks & Libraries"
                    skills={FrameworksLibrariesSkills}
                />
                <SkillsColumn
                    icon={faDatabase}
                    title="Database Management"
                    skills={DatabaseManagementSkills}
                />
                <SkillsColumn
                    icon={faCheck}
                    title="Testing & Automation"
                    skills={TestingAutomationSkills}
                />
                <SkillsColumn
                    icon={faChartLine}
                    title="Analytics & Tools"
                    skills={AnalyticsToolsSkills}
                />
                <SkillsColumn
                    icon={faBrain}
                    title="MachineLearning & Artificial Intelligence"
                    skills={MachineLearningSkills}
                />
                <SkillsColumn
                    icon={faRobot}
                    title="Embedded Systems"
                    skills={EmbeddedSystemsSkills}
                />
            </div>
        </div>
    );
}

export default SkillsContainer;
