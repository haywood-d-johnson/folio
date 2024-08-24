import React from "react";
import "./index.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPuzzlePiece,
    faToolbox,
    faRocket,
    faCertificate,
    faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

function HeaderComponent() {
    return (
        <header>
            <nav className="nav_title">HJ</nav>
            <nav>
                <a href="#">
                    <FontAwesomeIcon
                        icon={faPuzzlePiece}
                        style={{ margin: "5px" }}
                    />
                    About
                </a>
                <a href="#">
                    <FontAwesomeIcon
                        icon={faToolbox}
                        style={{ margin: "5px" }}
                    />
                    Skills
                </a>
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
