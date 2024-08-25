import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faXTwitter,
    faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import "./index.css";

function SocialMediaLinks() {
    return (
        <div className="sml-cotainer">
            <div className="social-media-links">
                <div>You can also find me on my socials</div>
                <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ width: "20px" }}
                >
                    <FontAwesomeIcon icon={faFacebookF} size="lg" />
                </a>
                <a
                    href="https://www.twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ width: "20px" }}
                >
                    <FontAwesomeIcon icon={faXTwitter} size="lg" />
                </a>
                <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ width: "20px" }}
                >
                    <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                </a>
            </div>
        </div>
    );
}

export default SocialMediaLinks;
