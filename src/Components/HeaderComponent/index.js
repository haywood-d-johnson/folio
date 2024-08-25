import React from "react";
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
    return (
        <header>
            <nav className="nav_title">HJ</nav>
            <nav>
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
                <a href="#">
                    <FontAwesomeIcon
                        icon={faRocket}
                        style={{ margin: "5px" }}
                    />
                    Projects
                </a>
                <a href="#">
                    <FontAwesomeIcon
                        icon={faCertificate}
                        style={{ margin: "5px" }}
                    />
                    Experience
                </a>
                <a href="#">
                    <FontAwesomeIcon
                        icon={faCalendarDays}
                        style={{ margin: "5px" }}
                    />
                    Events
                </a>
            </nav>
        </header>
    );
}

export default HeaderComponent;
