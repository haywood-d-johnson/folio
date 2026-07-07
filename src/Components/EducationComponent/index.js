import React from "react";
import { ExperienceItem } from "./EducationItem";

import "./index.css";

function EducationSection({ nightMode }) {
    const education = [
        {
            year: "April 2022",
            title: "Associates of Applied Science in Computer Programming",
            details: "Texas State Technical College",
            image: "/TSTC_Diploma.png",
        },
        {
            year: "August 2024",
            title: "Bachelor of Science in Computer Science",
            details: "Colorado Technical University",
            image: "/CTU_Diploma.png",
        },
    ];

    return (
        <section className="experience-section">
            <div className={`experience-grid reveal-grid ${nightMode ? "sun" : "moon"}`}>
                {education.map((edu, index) => (
                    <ExperienceItem key={index} {...edu} />
                ))}
            </div>
        </section>
    );
}

function CertificationSection({ nightMode }) {
    const education = [
        {
            year: "2025",
            title: "Google AI Essentials",
            details: "Google",
        },
        {
            year: "2025",
            title: "Google Project Management",
            details: "Google",
        },
        {
            year: "2024",
            title: "Google IT Support",
            details: "Google",
        },
    ];

    return (
        <section className="experience-section">
            <div className={`experience-grid reveal-grid ${nightMode ? "sun" : "moon"}`}>
                {education.map((edu, index) => (
                    <ExperienceItem key={index} {...edu} />
                ))}
            </div>
        </section>
    );
}

export { EducationSection, CertificationSection };
