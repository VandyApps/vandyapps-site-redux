export default ({ event: event }) => {
    let color = "rgba(" + parseInt(255 * Math.random()) + "," + parseInt(255 * Math.random()) + "," + parseInt(255 * Math.random()) + ",0.5)";
    return (<ul className="event-card" style={{ backgroundColor: color }}>
        <style jsx>{`
        .event-card {
            background-color: rgba(0,0,0,0.1);
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
    </ul>)
}