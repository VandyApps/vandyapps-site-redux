import Meta from '../layouts/meta';
import Header from '../components/header';
import EventCard from '../components/event-card';
import events from '../resources/events.json'

export default () =>
    <div className='container content-page schedule'>
        <Meta />
        <Header />
        <style jsx>{`
            .event-list {
                margin-top: 1.75em;
            }
        `}</style>
        <div className="content">
            <h1>Schedule</h1>
            <p>During the school year, we typically hold meetings from 7-8PM on Tuesdays in Featheringill 134. Records of our past events are displayed below. To receive notifications about upcoming meetings, please sign up for our mailing list.</p>
            <div className="event-list">
                {events.map((event, i) => <EventCard key={i} event={event} />)}
            </div>
        </div>
    </div>