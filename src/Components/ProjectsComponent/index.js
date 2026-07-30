import React from "react";

import "./index.css";

import {
    faLeaf,
    faMobile,
    faFootballBall,
    faLink,
} from "@fortawesome/free-solid-svg-icons";

import { ProjectDetails } from "./ProjectComponent";
import ComingSoonComponent from "../ComingSoonComponent";

function ProjectsSection() {
    const projects = [
        {
            title: "Steady",
            titleIcon: faMobile,
            githubLink: "https://github.com/haywood-d-johnson/Steady",
            status: { label: "In Progress", tone: "wip" },
            description:
                "A privacy-focused mood tracking app that helps users monitor their emotional well-being through daily check-ins. Features local-first data storage, cross-platform compatibility, and intuitive mood visualization.",
            techStack: [
                "TypeScript",
                "React",
                "FastAPI",
                "SQLite",
                "Docker",
                "JWT",
                "Python"
            ],
        },
        {
            title: "Gameday Central",
            titleIcon: faFootballBall,
            githubLink: "https://github.com/haywood-d-johnson/gameday-central",
            status: { label: "In Progress", tone: "wip" },
            description:
                "One-stop solution for sports broadcast information, so you never have to check multiple apps. Features intelligent caching, real-time updates, and comprehensive game tracking.",
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
            title: "Root Reader",
            titleIcon: faLeaf,
            githubLink:
                "https://github.com/haywood-d-johnson/plant_communicator",
            status: { label: "In Progress", tone: "wip" },
            description:
                "The app I built for my own plants. Arduino sensors track soil health in real time — moisture, light, and NPK — and push smart alerts so nothing gets over- or under-watered, while a computer-vision layer identifies plants from a single photo. It all powers Tall, Black & Propagated, the plant community I run online.",
            techStack: [
                "Python",
                "FastAPI",
                "OpenCV",
                "TensorFlow",
                "React Native",
                "Arduino",
                "C++",
                "Supabase",
            ],
        },
        {
            title: "Tall, Black & Propagated",
            titleIcon: faLink,
            githubLink: "https://github.com/haywood-d-johnson/TBP-Links",
            liveLink: "https://tbp-links.vercel.app/",
            status: { label: "Live", tone: "live" },
            description:
                "My hand-built link-in-bio for the plant community I run — one place for everything I make and post, wired with Google Analytics so I can see what actually gets clicked instead of renting Linktree.",
            techStack: ["HTML", "CSS", "JavaScript", "Google Analytics"],
        },
    ];

    return (
        <section className="projects-section">
            {projects.length > 0 ? (
                <div className="project-grid reveal-grid">
                    {projects.map((project, index) => (
                        <div className="project-grid-item" key={index}>
                            <ProjectDetails
                                title={project.title}
                                titleIcon={project.titleIcon}
                                githubLink={project.githubLink}
                                liveLink={project.liveLink}
                                status={project.status}
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
