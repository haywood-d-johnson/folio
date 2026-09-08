import React from "react";
import { WorkExperienceItem } from "./WorkExperienceItem";

import "./index.css";

function WorkExperienceSection({ nightMode }) {
    const education = [
        {
            syear: "November 2025",
            eyear: "Present",
            title: "Software Developer",
            details: "Packless Industries",
            summary:
                "Dynamics 365 Business Central (AL) extensions and resilient ASP.NET Core services for manufacturing — plus an internal engineering platform where I integrated Anthropic Claude to analyze bugs, generate fixes, and open reviewable Git branches.",
        },
        {
            syear: "November 2025",
            eyear: "Present",
            title: "AI Data & Software Engineering Contributor",
            details: "Snorkel AI",
            summary:
                "Building benchmark-quality reference solutions and assessing AI-generated code for correctness and edge cases — defining the engineering standards used to measure LLM coding quality.",
        },
        {
            syear: "November 2024",
            eyear: "October 2025",
            title: "Web Developer (Contract)",
            details: "Square 205",
            summary:
                "Delivered client sites end-to-end on WordPress/WooCommerce and React — owning planning, SEO, hosting, and ongoing support.",
        },
        {
            syear: "January 2023",
            eyear: "August 2024",
            title: "Programmer",
            details: "CTDI",
            summary:
                "Built internal logistics and inventory apps in ASP.NET MVC + SQL Server, plus Arduino-based device diagnostics that cut manual QA.",
        },
        {
            syear: "March 2022",
            eyear: "May 2024",
            title: "Senior Software Developer",
            details: "IDo Systems",
            summary:
                "Architected a PHP/Laravel microservices platform on AWS with automated testing and CI/CD-supported deployments.",
        },
        {
            syear: "September 2017",
            eyear: "November 2020",
            title: "Owner / Software Architect",
            details: "BlackBox Software",
            summary:
                "Founded and led a 5-developer team delivering custom software and IoT systems from client requirements through deployment.",
        },
    ];

    return (
        <section className="work-experience-section">
            <div className={`work-experience-grid reveal-grid ${nightMode ? "sun" : "moon"}`} >
                {education.map((edu, index) => (
                    <WorkExperienceItem key={index} {...edu} />
                ))}
            </div>
        </section>
    );
}

export default WorkExperienceSection;
