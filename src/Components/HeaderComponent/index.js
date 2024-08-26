import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPuzzlePiece,
    faToolbox,
    faRocket,
    faCertificate,
    faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

import "./index.css";

function HeaderComponent() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 786);

    // Handle window resize to detect mobile view
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 786);
        };

        window.addEventListener("resize", handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header>
            <div className="header-container">
                <nav
                    className="nav_title"
                    onClick={isMobile ? toggleMenu : null}
                >
                    <img src="/BlackBoxSoftLogo.png" alt="BBSLogo" />
                </nav>

                {!isMobile && (
                    <nav className="nav-links">
                        <Link to="about" smooth duration={500}>
                            <FontAwesomeIcon
                                icon={faPuzzlePiece}
                                style={{ margin: "5px" }}
                            />
                            About
                        </Link>
                        <Link to="skills" smooth duration={500}>
                            <FontAwesomeIcon
                                icon={faToolbox}
                                style={{ margin: "5px" }}
                            />
                            Skills
                        </Link>
                        <Link to="projects" smooth duration={500}>
                            <FontAwesomeIcon
                                icon={faRocket}
                                style={{ margin: "5px" }}
                            />
                            Projects
                        </Link>
                        <Link to="experience" smooth duration={500}>
                            <FontAwesomeIcon
                                icon={faCertificate}
                                style={{ margin: "5px" }}
                            />
                            Experience
                        </Link>
                        <Link to="events" smooth duration={500}>
                            <FontAwesomeIcon
                                icon={faCalendarDays}
                                style={{ margin: "5px" }}
                            />
                            Events
                        </Link>
                    </nav>
                )}

                {isMobile && menuOpen && (
                    <div className="fullscreen-menu">
                        <nav className="fullscreen-nav-links">
                            <Link
                                to="about"
                                smooth
                                duration={500}
                                onClick={toggleMenu}
                            >
                                <FontAwesomeIcon
                                    icon={faPuzzlePiece}
                                    style={{ margin: "5px" }}
                                />
                                About
                            </Link>
                            <Link
                                to="skills"
                                smooth
                                duration={500}
                                onClick={toggleMenu}
                            >
                                <FontAwesomeIcon
                                    icon={faToolbox}
                                    style={{ margin: "5px" }}
                                />
                                Skills
                            </Link>
                            <Link
                                to="projects"
                                smooth
                                duration={500}
                                onClick={toggleMenu}
                            >
                                <FontAwesomeIcon
                                    icon={faRocket}
                                    style={{ margin: "5px" }}
                                />
                                Projects
                            </Link>
                            <Link
                                to="experience"
                                smooth
                                duration={500}
                                onClick={toggleMenu}
                            >
                                <FontAwesomeIcon
                                    icon={faCertificate}
                                    style={{ margin: "5px" }}
                                />
                                Experience
                            </Link>
                            <Link
                                to="events"
                                smooth
                                duration={500}
                                onClick={toggleMenu}
                            >
                                <FontAwesomeIcon
                                    icon={faCalendarDays}
                                    style={{ margin: "5px" }}
                                />
                                Events
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}

export default HeaderComponent;
