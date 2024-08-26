import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHelmetSafety } from "@fortawesome/free-solid-svg-icons";

import "./index.css";

function ComingSoonComponent({ component }) {
    return (
        <div className="coming-soon-overlay">
            <FontAwesomeIcon icon={faHelmetSafety} className="construct-icon" />
            <h3>{component} coming Soon!</h3>
            <FontAwesomeIcon icon={faHelmetSafety} className="construct-icon" />
        </div>
    );
}

export default ComingSoonComponent;
