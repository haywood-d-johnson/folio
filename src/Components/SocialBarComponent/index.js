import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faXTwitter,
    faLinkedinIn,
    faYoutube,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";

import "./index.css";

function SocialMediaLinks() {
    return (
        <div className="sml-cotainer">
            <div className="social-media-links">
                <div>You can also find me on my socials</div>
                <div className="sm-icon-array">
                    <a
                        href="https://www.facebook.com/bboxsoft/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sm-bubble"
                    >
                        <FontAwesomeIcon icon={faFacebookF} size="lg" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/haywood-d-johnson/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sm-bubble"
                    >
                        <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                    </a>
                    <a
                        href="https://www.youtube.com/@BlackBoxSoft"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sm-bubble"
                    >
                        <FontAwesomeIcon icon={faYoutube} size="lg" />
                    </a>
                    <a
                        href="https://github.com/haywood-d-johnson"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sm-bubble"
                    >
                        <FontAwesomeIcon icon={faGithub} size="lg" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SocialMediaLinks;
