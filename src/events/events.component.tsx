import React from "react";
import { getUpcomingEvents } from "./events.resource";
import styles from "./events.component.css";
import { Link } from "react-router-dom";
import Section from "../hocs/section.component";

export default function Events() {
  const [events, setEvents] = React.useState([]);
  React.useEffect(() => {
    getUpcomingEvents().then(events => {
      setEvents(events);
    });
  }, []);
  return (
    <Section title="Upcoming Events">
      <div className="row">
        {events.map(event => (
          <div className="col-md-3">
            <div className={`card ${styles.eventCard} text-center`}>
              <div className="card-body">
                <h4 className="card-title">{event.title}</h4>
                <h6 className="card-subtitle mb-2 text-muted">
                  {event.venue_name},{event.address}
                </h6>
                <h6 className="card-subtitle mb-2 text-muted">
                  From: {event.event_start} To: {event.event_end}
                </h6>
                <p className="card-text">{event.description}</p>
                <button className="btn btn-outline-info">
                  <Link to={event.url} className="card-link">
                    RSVP
                  </Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
