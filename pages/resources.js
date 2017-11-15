import Meta from '../layouts/meta'
import Header from '../components/header'

export default () =>
    <div className='container content-page resources'>
        <Meta title="Resources | VandyApps" />
        <Header />
        <style jsx>{`
        .library-wrapper {
            position: relative;
            overflow: hidden;
            box-shadow: 0 0 0 1px rgba(0,0,0,0.03), 0 2px 3px rgba(0,0,0,0.05), 0 12.5px 40px rgba(0,0,0,0.07);
            border-radius: 4px;
        }

        iframe {
            border: none;
            box-sizing: border-box;
            display: block;
            margin-bottom: -1px;
        }
        `}</style>
        <div className="content">
            <h1>GitHub</h1>
            <p>All of the materials from our weekly sessions are available from our <a href="https://github.com/vandyapps">GitHub organization</a>:</p>
            <ul>
                <li><b>Android development:</b> <a href="https://github.com/VandyApps/android-2017-18">VandyApps/android-2017-18</a></li>
                <li><b>iOS development:</b> <a href="https://github.com/VandyApps/intro-ios-2017">VandyApps/intro-ios-2017</a></li>
                <li><b>Web development:</b> <a href="https://github.com/VandyApps/web-2017-18">VandyApps/web-2017-18</a></li>
            </ul>
            <p>Numerous other repositories, including apps that we've published and submissions from our coding competitions, can also be found on GitHub. Feel free to look around!</p>
            <h1>Library</h1>
            <p>We have a physical book collection covering a vast array of topics, from preparing for interviews to machine learning. Please contact an officer if you would like to borrow any of our books. The status of each book is shown below:</p>
            <div className="library-wrapper">
                <iframe width="100%" height="600px" src="https://docs.google.com/spreadsheets/d/11APAnxKZiBgeYcKHnBoaBkYxgUceYUWmZkMjpMGZy2A/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false" />
            </div>
            <h1>Slack</h1>
            <p>Our Slack community is where you can ask questions regarding anything tech-related, chat with other members, request mock interviews, and more. If you haven't done so already, please <a href="https://vandyapps.slack.com/signup">sign up today</a>!</p>
        </div>
    </div>