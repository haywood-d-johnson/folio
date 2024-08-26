import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";

function NavLink({ icon, text, to }) {
    return (
        <Link to={to} smooth duration={500}>
            <FontAwesomeIcon icon={icon} style={{ margin: "10px" }} />
            {text}
        </Link>
    );
}

export default NavLink;
