import React from "react";

import "./index.css";

function FooterSection() {
    return (
        <div className="footer-container">
            <section className="contact-footer">
                <h4>Hand crafted by:</h4>
                <h3>Haywood D. Johnson</h3>
                <p>Any takers?</p>
                <div className="social-links">
                    <a
                        href="https://www.linkedin.com/in/your-linkedin-profile"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/your-github-username"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub  
                    </a>
                </div>
            </section>
        </div>
    );
}

export default FooterSection;
