import React from "react";

import "./index.css";

import { ProjectImage, ProjectDetails } from "./ProjectComponent";
import ComingSoonComponent from "../ComingSoonComponent";

function ProjectsSection() {
    const projects = [
        // template
        // {
        //     title: "Project 1",
        //     description:
        //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        //     imageUrl: "path/to/project1.jpg",
        //     techStack: ["test"],
        // },
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
