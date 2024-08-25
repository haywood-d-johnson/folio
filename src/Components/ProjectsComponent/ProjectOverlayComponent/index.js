import React, { useState } from "react";

import "./index.css";

function ProjectsOverlay({ children }) {
    const [showOverlay, setShowOverlay] = useState(true);

    return (
        <div>
            {showOverlay && (
                <div className="projects-overlay">Coming Soon...</div>
            )}
            {children}
        </div>
    );
}

export default ProjectsOverlay;
