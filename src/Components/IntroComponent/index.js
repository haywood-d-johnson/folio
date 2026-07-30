import React from "react";

import "./index.css";

function Introduction({ nightMode }) {
    return (
        <div className="intro-container">
            <div className={`intro ${nightMode ? "night" : ""}`}>
                I am Haywood D. Johnson, a Full-Stack Software Engineer.
            </div>

            <div className={`intro ${nightMode ? "night" : ""}`}>
                9+ years building web apps, APIs, and cloud systems &mdash; and
                authoring reference solutions for AI model training.
            </div>

            <div className={`intro ${nightMode ? "night" : ""}`}>
                Have a look at some of my{` `}
                <a href="#projects" className="intro-link">
                    Projects
                </a>
            </div>
            <div className={`intro ${nightMode ? "night" : ""}`}>
                Or, have a look at my academic & professional{` `}
                <a
                    href="/haywood_d_johnson_resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="intro-link"
                >
                    Resume
                </a>
            </div>
            <div className={`intro ${nightMode ? "night" : ""}`}>
                Or, you can contact me at{` `}
                <a
                    href="mailto:haywood.d.johnson@gmail.com"
                    style={{ textDecoration: "none", color: "var(--accent)" }}
                >
                    haywood.d.johnson@gmail.com
                </a>
            </div>
            <div className={`intro ${nightMode ? "night" : ""}`}>
                Off the clock, I grow things &mdash; plants, and the tools
                around them &mdash; over at{` `}
                <a
                    href="https://tbp-links.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="intro-link"
                >
                    Tall, Black &amp; Propagated
                </a>
                .
            </div>
        </div>
    );
}

export default Introduction;
