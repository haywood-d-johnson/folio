import React from "react";
import SkillsColumn from "./SkillsColumnComponent";

import {
    faGears,
    faWandMagicSparkles,
    faRobot,
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

    const IoTDevDescription =
        "Innovative electronics engineer specializing in designing and developing cutting-edge IoT devices with knowledge in hardware design, microcontroller programming, and wireless communication protocols.";
    const IoTDevSkills = ["Arduino", "Python", "C/C++"];
    const IoTDevToolsList = ["Arduino", "Raspberry Pi", "Circuit Design"];

    return (
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
        </div>
    );
}

export default SkillsContainer;
