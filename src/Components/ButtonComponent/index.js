import React from "react";

import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

function DownloadCVButton() {
    return (
        <div className="button-container">
            <a
                href="https://drive.google.com/file/d/1k2sNOgqcP0bckHZH_PgKbMyWr1jmD-vM/view?usp=sharing"
                download
                className="download-cv-button"
            >
                <FontAwesomeIcon icon={faFile} style={{ padding: "5px" }} />
                Download CV
            </a>
        </div>
    );
}

export default DownloadCVButton;
