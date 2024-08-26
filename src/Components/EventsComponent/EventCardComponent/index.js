import React from "react";

import "./index.css";

function EventCard({ event }) {
    const { type, title, date, location, time, ticketLink } = event;

    return (
        <div className="event-card">
            <a
                href={ticketLink}
                target="_blank"
                rel="noopener noreferrer"
                className="event-info"
            >
                <h4 className="event-card-type">{type}</h4>
                <h2 className="event-card-title">{title}</h2>
                <p className="event-card-date">{date}</p>
                <p className="event-card-location">{location}</p>
                <p className="event-card-time">{time}</p>
            </a>
        </div>
    );
}

export default EventCard;
