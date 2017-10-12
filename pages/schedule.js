import Meta from '../layouts/meta';
import Header from '../components/header';
import Events from '../components/events';
let eventData = require('../resources/events.json');
let i = 0;
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
            .event {
            	background-color: rgba(0,0,0,0.1);
            	border-radius: 5px;
            	list-style-type: none;
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
		<Meta />
		<Header />
		<div className="content">
			<Events />
		</div>
	</div>