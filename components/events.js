import React from 'react';
import classNames from 'classnames';
import EventCard from './event-card';
import eventData from '../resources/events.json';

export default () => {
	return <div className="event-list">
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
		{
			eventData.events.map((event, i) => {
				return <EventCard key={i} event={event}/>
			})
		}
	</div>
}
