import Meta from '../layouts/meta'
import Header from '../components/header'

export default () =>
    <div className='container content-page resources'>
        <Meta />
        <Header />
        <style jsx>{`
        .library-wrapper {
            position: relative;
            overflow: hidden;
            box-shadow: 0 0 0 .5px rgba(0,0,0,0.125), 0 12.5px 30px rgba(0,0,0,0.07);
            border-radius: 4px;
        }

        iframe {
            border: none;
            display: block;
        }
        `}</style>
        <div className="content">
            <h1>GitHub</h1>
            <p>All of the materials from the weekly sessions are available from our GitHub organization: </p>
            <ul>
                <li><b>Android development:</b> https://github.com/VandyApps/android-2017-18</li>
                <li><b>iOS development:</b> https://github.com/VandyApps/intro-ios</li>
                <li><b>Web development:</b> https://github.com/VandyApps/web-2017-18</li>
            </ul>
            <p>Numerous other repositories, including apps that we've published and submissions from our coding competitions, can also be found on GitHub. Feel free to look around!</p>
            <h1>Library</h1>
            <p>We have a physical book collection covering a vast array of topics, from preparing for interviews to machine learning. The status of each book can be found below. Please contact an officer if you would like to borrow any of our books.</p>
            <div className="library-wrapper">
                <iframe width="100%" height="600px" src="https://docs.google.com/spreadsheets/d/11APAnxKZiBgeYcKHnBoaBkYxgUceYUWmZkMjpMGZy2A/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false" />
            </div>
        </div>
    </div>