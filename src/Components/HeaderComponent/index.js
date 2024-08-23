import React from "react";
import "./index.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPuzzlePiece} from "@fortawesome/free-solid-svg-icons";

function HeaderComponent() {
    return (
        <header>
            <nav className="nav_title">HJ</nav>
            <nav>
                <a href="#">
                    <FontAwesomeIcon icon={faPuzzlePiece} />
                    About
                </a>
                <a href="#">Skills</a>
                <a href="#">Projects</a>
                <a href="#">Experience</a>
                <a href="#">Events</a>
            </nav>
        </header>
    );
}

export default HeaderComponent;
