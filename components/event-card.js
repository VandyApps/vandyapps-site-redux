import randomColor from '../resources/random-color';

export default ({ event: event, eventKey: key }) => (
    <div
        className="event-card shadow-layer"
        style={{ borderTop: `4px solid ${randomColor(key)}` }}
    >
        <style jsx>{`
            .event-card {
                padding: 1.25em 1.25em 0.75em;
                margin: 2.5em 0;
            }

            @media (min-width: 680px) {
                .event-card {
                    padding: 1.5em 1.5em 1em;
                }
            }

            .event-date {
                font-size: 0.85em;
                color: #a1a1a1;
            }

            .event-title {
                font-size: 1.25em;
                font-weight: bold;
            }
        `}</style>
        <div className="event-date">{event.date}</div>
        <div className="event-title">{event.name}</div>
        {event.descr()}
    </div>
);
