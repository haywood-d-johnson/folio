import React from "react";

import "./index.css";

import { ProjectImage, ProjectDetails } from "./ProjectComponent";

import ProjectsOverlay from "./ProjectOverlayComponent";

function ProjectsSection() {
    const projects = [
        {
            title: "Project 1",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            imageUrl: "path/to/project1.jpg",
            techStack: ["test"],
        },
        {
            title: "Project 2",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            imageUrl: "path/to/project2.jpg",
            techStack: ["test"],
        },
        // Add more projects here
    ];

    return (
        <section className="projects-section">
            <ProjectsOverlay className="projects-overlay">
                <div className="project-grid">
                    {projects.map((project, index) => (
                        <div className="project-grid-item" key={index}>
                            <ProjectImage
                                imageUrl={project.imageUrl}
                                alt={project.title}
                            />
                            <ProjectDetails
                                title={project.title}
                                description={project.description}
                                techStack={project.techStack}
                            />
                        </div>
                    ))}
                </div>
            </ProjectsOverlay>
        </section>
    );
}

export default ProjectsSection;
