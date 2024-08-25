import React from "react";

import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

function DownloadCVButton() {
    return (
        <div className="button-container">
            <a href="#" className="download-cv-button">
                <FontAwesomeIcon icon={faFile} style={{ padding: "5px" }} />
                Download CV
            </a>
        </div>
    );
}

export default DownloadCVButton;
