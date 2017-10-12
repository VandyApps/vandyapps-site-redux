export default props => {
    const event = props.event;
    let color = "rgba(" + parseInt(255 * Math.random()) + "," + parseInt(255 * Math.random()) + "," + parseInt(255 * Math.random()) + ",0.5)";
    return (<ul className="eventBox" style={{ backgroundColor: color }}>
        <li className="eventTitle">{event.name}</li>
        <li className="eventDate">{event.date}</li>
        <li>{
            event.descr.map((lineOfText, i) => {
                return (<p key={i}>{lineOfText}</p>)
            })
        }</li>
    </ul>)
}