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

import NavLink from "./NavLinkComponent";

import "./index.css";

function HeaderComponent({ nightMode }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 786);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 786);
        };

        window.addEventListener("resize", handleResize);

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
                        <nav className={`nav-links ${ nightMode ? "nav-night" : "" }`}>
                            <NavLink
                                icon={faPuzzlePiece}
                                text="About"
                                to="about"
                            />
                            <NavLink
                                icon={faToolbox}
                                text="Skills"
                                to="skills"
                            />
                            <NavLink
                                icon={faRocket}
                                text="Projects"
                                to="projects"
                            />
                            <NavLink
                                icon={faCertificate}
                                text="Experience"
                                to="experience"
                            />
                            <NavLink
                                icon={faCalendarDays}
                                text="Events"
                                to="events"
                            />

                        </nav>
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
                                    style={{ margin: "10px" }}
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
                                    style={{ margin: "10px" }}
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
                                    style={{ margin: "10px" }}
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
                                    style={{ margin: "10px" }}
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
                                    style={{ margin: "10px" }}
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
