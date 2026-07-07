import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import "./index.css";

function StickyLinks({ nightMode, toggle }) {
    return (
        <nav className="sticky-links" aria-label="Quick links">
            <a
                href="https://github.com/haywood-d-johnson"
                target="_blank"
                rel="noopener noreferrer"
                className="sticky-links-item"
                aria-label="GitHub"
            >
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
                href="https://www.linkedin.com/in/haywood-d-johnson/"
                target="_blank"
                rel="noopener noreferrer"
                className="sticky-links-item"
                aria-label="LinkedIn"
            >
                <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
                href="mailto:haywood.d.johnson@gmail.com"
                className="sticky-links-item"
                aria-label="Email"
            >
                <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <span className="sticky-links-divider" aria-hidden="true" />
            <button
                className="sticky-links-item"
                onClick={toggle}
                aria-label={nightMode ? "Switch to light mode" : "Switch to dark mode"}
            >
                <FontAwesomeIcon icon={nightMode ? faSun : faMoon} />
            </button>
        </nav>
    );
}

export default StickyLinks;
