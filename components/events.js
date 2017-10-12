import React from 'react'
import { withRouter } from 'next/router'
import Link from 'next/link'
import ActiveLink from './activelink'
import classNames from 'classnames'

export default class extends React.Component {
	constructor(props) {
		super(props);
		this.eventData = require('../resources/events.json');
		this.state = {
			value: 3,
		};
	}
	render() {
		var color = 0;
		var eventList = this.eventData.events.map(function(event, i){
			color = "rgba("+parseInt(255 * Math.random())+","+parseInt(255 * Math.random())+","+parseInt(255 * Math.random())+",0.5)";
        	return (<ul key = {i} className = "eventBox" style={{backgroundColor: color}}>
        			<li className = "eventTitle">{event.name}</li>
        			<li className = "eventDate">{event.date}</li>
        			<li>{
        				event.descr.map((lineOfText, i) => {
        					return (<p key = {i}>{lineOfText}</p>)
        				})
        			}</li>
        			</ul>)
    	}.bind(this))

		return <div className = "Eventss">
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
}
