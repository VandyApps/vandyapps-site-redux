import randomColor from '../resources/random-color'

export default ({ event: event, eventKey: key }) => <div className="event-card shadow-layer" style={{ borderTop: `4px solid ${randomColor(key)}` }}>
    <style jsx>{`
    .event-card {
        border-radius: 4px;
        padding: 1.5em;
        margin: 2.5em 0;
    }

    .event-date {
        font-size: .85em;
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