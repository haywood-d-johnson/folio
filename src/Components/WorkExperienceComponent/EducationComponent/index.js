import React from "react";
import { WorkExperienceItem } from "./WorkExperienceItem";

import "./index.css";

function WorkExperienceSection() {
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
            syear: "January 2023",
            eyear: "Present",
            title: "Junior Programmer",
            details: "CTDI",
        },
        {
            syear: "January 2023",
            eyear: "Present",
            title: "Junior Programmer",
            details: "CTDI",
        },
    ];

    return (
        <section className="work-experience-section">
            <div className="work-experience-grid">
                {education.map((edu, index) => (
                    <WorkExperienceItem key={index} {...edu} />
                ))}
            </div>
        </section>
    );
}

export default WorkExperienceSection;

//  - Flower Mound, TX January 2023 – present
// Junior Programmer
// IDo Systems - Remote March 2022 – May 2024
// Senior Software Developer
// ● Designed, tested, and implemented new and updated features for the codebase.
// ● Developed and executed manual and automated test procedures to evaluate software products.
// ●
// Guitar Center - Waco, TX August 2019 – December 2022
// Customer Service Manager
// ● Managed all sales and margin-generating activities of sales associates within the store.
// ● Scheduled the sales floor with appropriate staff levels.
// Bloom Institute of Technology - Remote May 2018 - November 2018
// Teaching Assistant
// ● Guided students to technical proficiency in HTML, CSS, JavaScript, React, Redux, SQL, unit testing, and computer science
// fundamentals.
// ● Delivered hour-long solution lectures on daily code challenges and conducted daily sprint stand-ups to assess student progress.
// ● Mentored students who were at risk of falling behind to retain student enrollment.
// BlackBox Software (defunct) - Irving, TX/Remote September 2017 - November 2020
// Software Developer/Consultant
// ● Designed and developed end-to-end applications for clients.
// ● Managed entire codebases and handled technical issues and continuous integration.
// ● Developed VR games using Unity/C# and contributed to IoT projects involving Arduino and electronic circuit design.
