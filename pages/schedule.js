import Meta from '../layouts/meta';
import Header from '../components/header';
let eventData = require('../resources/events.json');
alert(eventData['events'][0]['date']);
export default () =>
	<div className ='container schedule'>
		<style jsx>{`
			.schedule .content {
                 max-width: 900px;
                 line-height: 1.66em;
                 padding: 0 2.5em;
            }

            @media (min-width: 680px) {
                .about .content {
                    padding: 0 4em;
                }
            }

			h1 {
                font-weight: normal;
            }


		`}</style>
		<Meta />
		<Header />
		<div className="content">
			<h1>Schedule</h1>
			<p>This page will list the events VandyApps will hold throughout the year. It's also
			being regularly updated so please be sure to check back often!</p>
		</div>
	</div>