import React from "react";

import "./index.css";
import SocialMediaLinks from "../SocialBarComponent";

function Introduction() {
    return (
        <div class="intro-container">
            <div class="intro">
                I am Haywood D. Johnson, a Software Engineer.
            </div>

            <div class="intro">Doer of all things tech</div>

            <div class="intro">
                Have a look at some of my{` `}
                <span>Projects</span>
            </div>
            <div class="intro">
                Or, have a look at my academic & professional{` `}
                <span>Resume</span>
            </div>
            <div class="intro">
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
