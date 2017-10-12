import React from 'react'
import classNames from 'classnames'
import eventData from '../resources/events.json';

export default () => {
	var color = 0;
	var eventList = eventData.events.map((event, i) => {
		color = "rgba(" + parseInt(255 * Math.random()) + "," + parseInt(255 * Math.random()) + "," + parseInt(255 * Math.random()) + ",0.5)";
		return (<ul key={i} className="eventBox" style={{ backgroundColor: color }}>
			<li className="eventTitle">{event.name}</li>
			<li className="eventDate">{event.date}</li>
			<li>{
				event.descr.map((lineOfText, i) => {
					return (<p key={i}>{lineOfText}</p>)
				})
			}</li>
		</ul>)
	})

	return <div className="Eventss">
		<style jsx global>{`
				.eventBox {
	            	background-color: rgba(0,0,0,0.1);
	            	border-radius: 5px;
	            	list-style-type: none;
	            	padding: 20px 20px;
	            }
	            .hidden {
	            	display: none;
	            }
	            .eventTitle {
	            	font-size: 20px;
	            	font-weight: bold;
	            }
	            .eventDate {
	            	font-size: 16px;
	            }
			`}</style>
		<div className="eventList"></div>
		<div>
			{eventList}
		</div>
	</div>
}
