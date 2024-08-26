import React from "react";
import EventCard from "./EventCardComponent";

import "./index.css";
import ComingSoonComponent from "../ComingSoonComponent";

function EventsSection() {
    const events = [
        // template
        // {
        //     type: "Conference",
        //     title: "WebDev Conference",
        //     date: "05 July Friday",
        //     location: "Global Arena, San Francisco",
        //     time: "09:00 - 18:00",
        //     ticketLink: "#",
        // },
    ];

    return (
        <section className="events-section">
            {events.length > 0 ? (
                <div className="event-list">
                    {events.map((event, index) => (
                        <EventCard key={index} event={event} />
                    ))}
                </div>
            ) : (
                <ComingSoonComponent component={"Events"} />
            )}
        </section>
    );
}

export default EventsSection;
