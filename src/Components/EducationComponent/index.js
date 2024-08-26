import React from "react";
import { ExperienceItem } from "./EducationItem";

import "./index.css";

function EducationSection() {
    const education = [
        {
            year: "August 2024",
            title: "Bachelor of Science in Computer Science",
            details: "Colorado Technical Institute",
        },
        {
            year: "April 2022",
            title: "Associates of Applied Science in Computer Programming",
            details: "Texas State Technical College",
        },
    ];

    return (
        <section className="experience-section">
            <div className="experience-grid">
                {education.map((edu, index) => (
                    <ExperienceItem key={index} {...edu} />
                ))}
            </div>
        </section>
    );
}

function CertificationSection() {
    const education = [
        {
            year: "August 2024",
            title: "Bachelor of Science in Computer Science",
            details: "Colorado Technical Institute",
        },
        {
            year: "April 2022",
            title: "Associates of Applied Science in Computer Programming",
            details: "Texas State Technical College",
        },
    ];

    return (
        <section className="experience-section">
            <div className="experience-grid">
                {education.map((edu, index) => (
                    <ExperienceItem key={index} {...edu} />
                ))}
            </div>
        </section>
    );
}

export { EducationSection, CertificationSection };
