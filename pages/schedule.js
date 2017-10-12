import Meta from '../layouts/meta';
import Header from '../components/header';
import EventCard from '../components/event-card';
import events from '../resources/events.json'

export default () =>
    <div className='container content-page schedule'>
        <Meta />
        <Header />
        <div className="content">
            <h1>Schedule</h1>
            <p>This page will list the events VandyApps will hold throughout the year. It's also
			being regularly updated so please be sure to check back often!</p>
            <div className="event-list">
            {events.map((event, i) => <EventCard key={i} event={event} />)}
            </div>
        </div>
    </div>