import React from "react";
import SkillsColumn from "./SkillsColumnComponent";

import "./index.css";

function SkillsContainer() {
    const programmingSkills = [
        "JavaScript",
        "PHP",
        "Python",
        "Java",
        "C/C++",
        "VB/C#",
    ];

    const frameLib = [
        "React",
        "React Native",
        "NodeJS",
        "J-Query",
        "Django",
        "C#/.NET/ASP.NET",
        "MVC",
    ];

    const dbms = ["Oracle RDBMS", "SQL Server", "MySQL", "MSSQL", "MongoDB"];

    const testingAutmation = [
        "Selenium",
        "JMeter",
        "Postman",
        "Jenkins",
        "VMWare",
        "Mocha",
        "Chai",
        "Jest",
    ];
    const itSuport = ["ITIL v3", "ServiceNow", "ITSM"];
    // Electronics & IoT: Arduino, Raspberry Pi, Circuit Design

    return (
        <div className="skills-container horizontal">
            <SkillsColumn
                title="Programming Languages"
                skills={programmingSkills}
            />
            <SkillsColumn title="Frameworks/Libraries" skills={frameLib} />
            <SkillsColumn title="Database Management" skills={dbms} />
            <SkillsColumn
                title="Testing/Automation"
                skills={testingAutmation}
            />
            <SkillsColumn title="IT Support" skills={itSuport} />
            <SkillsColumn title="IT Support" skills={itSuport} />
            {/* ... other columns ... */}
        </div>
    );
}

export default SkillsContainer;
