import randomColor from '../resources/random-color'

export default ({ event: event, eventKey: key }) => <ul className="event-card" style={{ borderTop: `4px solid ${randomColor(key)}` }}>
    <style jsx>{`
    .event-card {
        border-radius: 4px;
        list-style-type: none;
        padding: 1.5em;
        margin: 2.5em 0;
        box-shadow: inset 0 0 0 .5px rgba(0,0,0,0.125), 0 12.5px 30px rgba(0,0,0,0.07);
    }

    .event-date {
        font-size: .75em;
        color: #a1a1a1;
    }

    .event-title {
        font-size: 1.25em;
        font-weight: bold;
    }
    `}</style>
    <li className="event-date">{event.date}</li>
    <li className="event-title">{event.name}</li>
    <li>{event.descr.map((line, i) => <p key={i}>{line}</p>)}</li>
</ul>