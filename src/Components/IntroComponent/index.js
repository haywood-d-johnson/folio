import React from "react";

import "./index.css";

function Introduction({ nightMode }) {
    console.log(nightMode);
    return (
        <div className="intro-container">
            <div className={`intro ${nightMode ? "night" : ""}`}>
                I am Haywood D. Johnson, a Software Engineer.
            </div>

            <div className={`intro ${nightMode ? "night" : ""}`}>Doer of all things tech</div>

            <div className={`intro ${nightMode ? "night" : ""}`}>
                Have a look at some of my{` `}
                <span>Projects</span>
            </div>
            <div className={`intro ${nightMode ? "night" : ""}`}>
                Or, have a look at my academic & professional{` `}
                <span>Resume</span>
            </div>
            <div className={`intro ${nightMode ? "night" : ""}`}>
                Or, you can contact me at{` `}
                <a
                    href="mailto:haywood.d.johnson@gmail.com"
                    style={{ textDecoration: "none", color: "#874e3a" }}
                >
                    haywood.d.johnson@gmail.com
                </a>
            </div>
        </div>
    );
}

export default Introduction;
