import React, { useState } from "react";

import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faSpinner } from "@fortawesome/free-solid-svg-icons";

function DownloadCVButton() {
    const [isLoading, setIsLoading] = useState(false);

    const handleDownload = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch("https://drive.google.com/file/d/1MrLzBY5MWF6roVtU5ZkwIK1OAzxHj8EG/view?usp=sharing");
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'haywood_d_johnson_resume.pdf';
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error downloading CV:', error);
            alert('Failed to download CV. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="button-container">
            <a
                href="https://drive.google.com/uc?export=download&id=1MrLzBY5MWF6roVtU5ZkwIK1OAzxHj8EG"
                className="download-cv-button"
            >
                <FontAwesomeIcon icon={faFile} style={{ padding: "5px" }} />
                Download CV
            </a>
        </div>
    );
}

export default DownloadCVButton;
