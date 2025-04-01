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
            <div className={`experience-grid ${nightMode ? "sun" : "moon"}`}>
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
            year: "July 2022",
            title: "Data Structures and Algorithms Nanodegree Program",
            details: "Udacity",
        },
        {
            year: "August 2022",
            title: "ServiceNow/IT Support Apprenticeship",
            details: "New Apprenticeship",
        },
        {
            year: "Dec. 2020",
            title: "QA Engineer Bootcamp",
            details: "Quality Camp",
        },
        {
            year: "Feb. 2019",
            title: "Program in Computer Science and Web Development",
            details: "Bloom Institute of Technology",
        },
    ];

    return (
        <section className="experience-section">
            <div className={`experience-grid ${nightMode ? "sun" : "moon"}`}>
                {education.map((edu, index) => (
                    <ExperienceItem key={index} {...edu} />
                ))}
            </div>
        </section>
    );
}

export { EducationSection, CertificationSection };
