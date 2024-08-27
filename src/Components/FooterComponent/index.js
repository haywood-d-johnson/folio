import React from "react";

import "./index.css";
import SocialMediaLinks from "../SocialBarComponent";

function FooterSection() {
    const footerData = [
        {
            title: "HAVE A JOB OPPORTUNITY?",
            description:
                "I am open to potential job opportunities or collaborations. I have experience in web development and software engineering, so I am looking for roles that allow me to work on exciting and challenging projects. Reach out if you have a role in mind!",
        },
        {
            title: "LOOKING TO CONNECT?",
            description:
                "I'm always looking to meet new people and expand my professional circle. Whether you're a fellow developer, designer, or entrepreneur, let's grab a virtual coffee and see where it goes!",
        },
        {
            title: "NEED SOMETHING BUILT?",
            description:
                "My background in software and hardware architecture equips me to tackle complex projects. Let's connect if you have a task that could benefit from my skills and experience.",
        },
    ];

    return (
        <footer className="footer">
            <div class="footer-container">
                <div class="footer-job-opp">
                    <h3 className="connect-title">{footerData[0].title}</h3>
                    <p className="connect-description">
                        {footerData[0].description}
                    </p>
                </div>
                <div class="footer-connect">
                    <h3 className="connect-title">{footerData[1].title}</h3>
                    <p className="connect-description">
                        {footerData[1].description}
                    </p>
                </div>
                <div class="footer-gig-work">
                    <h3 className="connect-title">{footerData[2].title}</h3>
                    <p className="connect-description">
                        {footerData[2].description}
                    </p>
                </div>
                <div class="footer-social-links">
                    <SocialMediaLinks />
                    <p className="copyright">
                        <div className="copyright-name">Haywood D. Johnson</div>
                        <div className="copyright-arr">All Rights Reserved</div>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default FooterSection;
