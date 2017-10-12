import randomColor from '../resources/random-color'

export default ({ event: event }) => <ul className="event-card" style={{ backgroundColor: randomColor(event.date) }}>
    <style jsx>{`
    .event-card {
        border-radius: 4px;
        list-style-type: none;
        padding: 1.5em;
    }

    .event-title {
        font-size: 20px;
        font-weight: bold;
    }

    .event-date {
        font-size: 16px;
    }
    `}</style>
    <li className="event-title">{event.name}</li>
    <li className="event-date">{event.date}</li>
    <li>{event.descr.map((line, i) => <p key={i}>{line}</p>)}</li>
</ul>