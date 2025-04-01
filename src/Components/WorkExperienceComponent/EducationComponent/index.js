import React from "react";
import { WorkExperienceItem } from "./WorkExperienceItem";

import "./index.css";

function WorkExperienceSection({ nightMode }) {
    const education = [
        {
            syear: "January 2023",
            eyear: "Present",
            title: "Junior Programmer",
            details: "CTDI",
        },
        {
            syear: "March 2022",
            eyear: "May 2024",
            title: "Senior Software Developer",
            details: "IDo Systems",
        },
        {
            syear: "August 2019",
            eyear: "December 2022",
            title: "Customer Service Manager",
            details: "Guitar Center",
        },
        {
            syear: "September 2017",
            eyear: "November 2020",
            title: "Software Developer/Consultant",
            details: "BlackBox Software",
        },
    ];

    return (
        <section className="work-experience-section">
            <div className={`work-experience-grid ${nightMode ? "sun" : "moon"}`} >
                {education.map((edu, index) => (
                    <WorkExperienceItem key={index} {...edu} />
                ))}
            </div>
        </section>
    );
}

export default WorkExperienceSection;
