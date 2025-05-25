import React from "react";

import "./index.css";

import {
    faScrewdriverWrench,
    faLeaf,
    faMobile,
    faFootballBall,
} from "@fortawesome/free-solid-svg-icons";

import { ProjectDetails } from "./ProjectComponent";
import ComingSoonComponent from "../ComingSoonComponent";

function ProjectsSection() {
    const projects = [
        {
            title: "Steady",
            titleIcon: faMobile,
            githubLink: "https://github.com/haywood-d-johnson/Steady",
            description:
                "A cross-platform mood tracking application built with React Native and Expo. Features daily check-ins, mood visualization, data export/import, and smart notifications.",
            techStack: [
                "typescript",
                "react native",
                "expo",
                "sqlite",
                "indexeddb",
                "react context",
            ],
        },
        {
            title: "Gameday Central",
            titleIcon: faFootballBall,
            githubLink: "https://github.com/haywood-d-johnson/gameday-central",
            description:
                "A centralized platform for tracking sports broadcasts and schedules. Features smart caching, rate limiting, and comprehensive game tracking across multiple providers.",
            techStack: [
                "javascript",
                "node.js",
                "express",
                "react",
                "api integration",
                "caching",
            ],
        },
        {
            title: "HiredUp",
            titleIcon: faScrewdriverWrench,
            githubLink: "http://github.com/haywood-d-johnson/job-hunt-app",
            description:
                "A powerful tool to streamline your job search by automating job scraping, tracking applications, and tailoring resumes/cover letters using AI.",
            techStack: ["python", "flask", "react", "react native"],
        },
        {
            title: "Root Reader",
            titleIcon: faLeaf,
            githubLink:
                "https://github.com/haywood-d-johnson/plant_communicator",
            description:
                "A full-stack IoT solution for monitoring soil moisture and fertility (NPK levels) using Arduino, Node.js/Express, Supabase, and a React Native mobile app.",
            techStack: [
                "C++",
                "javascript",
                "react",
                "typescript",
                "nodejs",
                "expressjs",
            ],
        },
    ];

    return (
        <section className="projects-section">
            {projects.length > 0 ? (
                <div className="project-grid">
                    {projects.map((project, index) => (
                        <div className="project-grid-item" key={index}>
                            <ProjectDetails
                                title={project.title}
                                titleIcon={project.titleIcon}
                                githubLink={project.githubLink}
                                description={project.description}
                                techStack={project.techStack}
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <ComingSoonComponent component={"Projects"} />
            )}
        </section>
    );
}

export default ProjectsSection;
