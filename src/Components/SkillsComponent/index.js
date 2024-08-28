import React from "react";
import SkillsColumn from "./SkillsColumnComponent";

import {
    faGears,
    faWandMagicSparkles,
    faRobot,
    faShield,
} from "@fortawesome/free-solid-svg-icons";

import "./index.css";

function SkillsContainer() {
    //Back-End DEV
    const BEDevDescription =
        "Skilled backend engineer with a strong foundation in API design and development, coupled with a proven track record in utilizing version control for efficient collaboration.";
    const BEDevSkills = ["PHP", "Python", "Java", "C/C++", "C#"];
    const BEDevToolsList = [
        "Django",
        "Node.Js",
        ".NET/ASP.NET",
        "SQL/NoSQL DBMS",
        "Google Analytics",
        "Firebase Analytics",
    ];

    //Front-End DEV
    const FEDevDescription =
        "Proficient front-end engineer with a deep understanding of web standards and best practices, capable of delivering high-quality and performant user experiences.";
    const FEDevSkills = ["Javascript", "HTML", "CSS", "Pug"];
    const FEDevToolsList = [
        "ReactJS",
        "React Native",
        "AngularJS",
        "J-Query",
        "MochaJS/Jest",
        "Playwright",
        "Selenium",
        "GitHub",
    ];

    // Electronics & IoT
    const IoTDevDescription =
        "Innovative electronics engineer specializing in designing and developing cutting-edge IoT devices with knowledge in hardware design, microcontroller programming, and wireless communication protocols.";
    const IoTDevSkills = ["Arduino", "Python", "C/C++"];
    const IoTDevToolsList = [
        "Arduino",
        "Raspberry Pi",
        "Circuit Design",
        "Artificial Inteligence",
        "Machine Learning",
    ];

    // IT Support
    const ITDescription =
        "Customer-oriented IT Support specialist with a passion for helping others. Able to provide technical assistance and support for a wide range of IT systems, ensuring optimal performance and user satisfaction.";
    const ITSkills = ["ITIL v3", "ITSM"];
    const ITToolsList = ["ServiceNow"];

    return (
        <div className="skills-grid-container">
            <div className="skills-container horizontal">
                <SkillsColumn
                    icon={faGears}
                    title="Back-End Development"
                    skills={BEDevSkills}
                    description={BEDevDescription}
                    toolsList={BEDevToolsList}
                />
                <SkillsColumn
                    icon={faWandMagicSparkles}
                    title="Front-End Development"
                    skills={FEDevSkills}
                    description={FEDevDescription}
                    toolsList={FEDevToolsList}
                />
                <SkillsColumn
                    icon={faRobot}
                    title="Electronics & IoT"
                    skills={IoTDevSkills}
                    description={IoTDevDescription}
                    toolsList={IoTDevToolsList}
                />
                <SkillsColumn
                    icon={faShield}
                    title="IT Support"
                    skills={ITSkills}
                    description={ITDescription}
                    toolsList={ITToolsList}
                />
            </div>
        </div>
    );
}

export default SkillsContainer;
