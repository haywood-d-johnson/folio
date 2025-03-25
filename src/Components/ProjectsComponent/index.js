import React from "react";

import "./index.css";

import {
    faScrewdriverWrench
} from "@fortawesome/free-solid-svg-icons";

import { ProjectImage, ProjectDetails } from "./ProjectComponent";
import ComingSoonComponent from "../ComingSoonComponent";

function ProjectsSection() {
    const projects = [
        // template
        // {
        //     title: "Project 1",
        //     githubLink: "",
        //     description:
        //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        //     imageUrl: "path/to/project1.jpg",
        //     techStack: ["test"],
        // },
        {
            title: "Job Hunt App",
            titleIcon: faScrewdriverWrench,
            githubLink: "http://github.com/haywood-d-johnson/job-hunt-app",
            description: "A powerful tool to streamline your job search by automating job scraping, tracking applications, and tailoring resumes/cover letters using AI.",
            imageUrl: "",
            techStack: ["python", "flask", "react", "react native"]
        }
    ];

    return (
        <section className="projects-section">
            {projects.length > 0 ? (
                <div className="project-grid">
                    {projects.map((project, index) => (
                        <div className="project-grid-item" key={index}>
                            <ProjectImage
                                imageUrl={project.imageUrl}
                                alt={project.title}
                            />
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
