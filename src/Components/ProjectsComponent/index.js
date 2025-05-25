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
                "A privacy-focused mood tracking app that helps users monitor their emotional well-being through daily check-ins. Features local-first data storage, cross-platform compatibility, and intuitive mood visualization.",
            techStack: [
                "TypeScript",
                "React Native",
                "Expo",
                "SQLite",
                "IndexedDB",
                "Context API",
            ],
        },
        {
            title: "Gameday Central",
            titleIcon: faFootballBall,
            githubLink: "https://github.com/haywood-d-johnson/gameday-central",
            description:
                "One-stop solution for sports broadcast information, eliminating the need to check multiple apps. Features intelligent caching, real-time updates, and comprehensive game tracking with 99.9% uptime.",
            techStack: [
                "JavaScript",
                "Node.js",
                "Express",
                "React",
                "REST API",
                "Redis",
            ],
        },
        {
            title: "HiredUp",
            titleIcon: faScrewdriverWrench,
            githubLink: "http://github.com/haywood-d-johnson/job-hunt-app",
            description:
                "AI-powered job search assistant that automates application tracking and document customization. Increased interview callback rates by 40% for beta users through intelligent resume tailoring.",
            techStack: [
                "Python",
                "Flask",
                "React",
                "React Native",
                "OpenAI API",
                "MongoDB",
            ],
        },
        {
            title: "Root Reader",
            titleIcon: faLeaf,
            githubLink:
                "https://github.com/haywood-d-johnson/plant_communicator",
            description:
                "IoT solution for precision agriculture that monitors soil health in real-time. Reduces water waste by 30% and improves crop yields through automated NPK level tracking and smart notifications.",
            techStack: [
                "C++",
                "Node.js",
                "Express",
                "React Native",
                "Arduino",
                "Supabase",
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
